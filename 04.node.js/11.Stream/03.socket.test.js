const assert = require('assert');
const net = require('net');
const path = require('path');
const { spawn } = require('child_process');

const SERVER = path.join(__dirname, '03.socket.js');
const PORT = 3000;

// 累积子进程所有 stdout 输出到一个共享缓冲区，
// 避免各次 waitForLog 因分块到达而漏读已输出的日志
function trackOutput(child) {
    const state = { buffer: '', waiters: [] };
    child.stdout.on('data', (chunk) => {
        state.buffer += chunk.toString();
        state.waiters = state.waiters.filter((w) => {
            if (state.buffer.includes(w.text)) {
                w.resolve(state.buffer);
                return false;
            }
            return true;
        });
    });
    return state;
}

// 等待共享缓冲区中出现指定文本
function waitForLog(state, text, timeoutMs = 3000) {
    if (state.buffer.includes(text)) {
        return Promise.resolve(state.buffer);
    }
    return new Promise((resolve, reject) => {
        const waiter = { text, resolve };
        const timer = setTimeout(() => {
            state.waiters = state.waiters.filter((w) => w !== waiter);
            reject(new Error(`Timed out waiting for log: ${text}\nGot:\n${state.buffer}`));
        }, timeoutMs);
        waiter.resolve = (buf) => {
            clearTimeout(timer);
            resolve(buf);
        };
        state.waiters.push(waiter);
    });
}

// 连接服务器并收集接收到的数据
function connectAndRead(sendPayload) {
    return new Promise((resolve, reject) => {
        const client = net.createConnection({ port: PORT }, () => {
            client.write(sendPayload);
        });

        let received = '';
        client.on('data', (data) => {
            received += data.toString();
            // 服务器的问候语以换行结束，收到后即结束连接
            client.end();
        });
        client.on('end', () => resolve(received));
        client.on('error', reject);
    });
}

async function main() {
    const server = spawn('node', [SERVER], { stdio: ['ignore', 'pipe', 'pipe'] });
    const out = trackOutput(server);
    let failed = false;

    try {
        // 1. 服务器应正常启动并监听端口
        await waitForLog(out, 'Server listening on port 3000.');
        console.log('✓ 服务器成功启动并监听端口 3000');

        // 2. 客户端连接后应收到服务器的问候语
        const greetingPromise = connectAndRead('ping from test\n');
        await waitForLog(out, 'Client connected.');
        console.log('✓ 服务器检测到客户端连接');

        const greeting = await greetingPromise;
        assert.strictEqual(greeting, 'Hello, Client!\n', '客户端应收到正确的问候语');
        console.log('✓ 客户端收到问候语: Hello, Client!');

        // 3. 服务器应打印出接收到的客户端数据
        await waitForLog(out, 'Received data: ping from test');
        console.log('✓ 服务器正确接收并打印客户端数据');

        // 4. 客户端断开后服务器应检测到 disconnect
        await waitForLog(out, 'Client disconnected.');
        console.log('✓ 服务器检测到客户端断开');

        console.log('\n所有测试通过 ✅');
    } catch (err) {
        failed = true;
        console.error('\n测试失败 ❌:', err.message);
    } finally {
        server.kill();
    }

    process.exit(failed ? 1 : 0);
}

main();

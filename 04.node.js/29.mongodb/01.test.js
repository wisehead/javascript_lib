const { MongoClient } = require('mongodb');

async function main() {
    // MongoDB 连接 URI
    const uri = "mongodb://admin:admin123@10.27.77.146:27017/?authSource=admin"; // 如果你使用的是远程 MongoDB，请相应更改 URI

    // 创建一个新的 MongoClient（mongodb 驱动 4.x+ 已默认启用新解析器和统一拓扑，无需再传对应选项）
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

    try {
        // 连接到 MongoDB 服务器
        await client.connect();

        console.log("Connected successfully to server");

      
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}

main().catch(console.error);
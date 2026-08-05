// pool/index.js
import { fork } from 'node:child_process';
import os from 'node:os';

export class ProcessPool {
  constructor({ file, size = Math.max(1, os.cpus().length - 1) } = {}) {
    this.file = file;
    this.size = size;
    this.idle = [];
    this.busy = new Map();  // worker -> taskId
    this.queue = [];
    for (let i = 0; i < size; i++) this._spawn();
  }

  _spawn() {
    const w = fork(this.file);
    w.on('message', (m) => {
      if (m?.type === 'done') {
        const cb = this.callbacks.get(m.id);
        if (cb) cb.resolve(m.result);
        this.callbacks.delete(m.id);
        this._markIdle(w);
        this._drain();
      }
    });
    w.on('exit', () => {
      // 自动补齐池子
      this.busy.delete(w);
      const idx = this.idle.indexOf(w);
      if (idx >= 0) this.idle.splice(idx, 1);
      this._spawn();
    });
    if (!this.callbacks) this.callbacks = new Map();
    this.idle.push(w);
  }

  _markIdle(w) {
    this.busy.delete(w);
    if (!this.idle.includes(w)) this.idle.push(w);
  }

  _acquire() {
    return this.idle.length ? this.idle.shift() : null;
  }

  _drain() {
    while (this.queue.length && this.idle.length) {
      const { id, payload, resolve, reject } = this.queue.shift();
      const w = this._acquire();
      this.busy.set(w, id);
      this.callbacks.set(id, { resolve, reject });
      w.send({ type: 'task', id, payload });
    }
  }

  runTask(payload) {
    const id = Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      this.queue.push({ id, payload, resolve, reject });
      this._drain();
    });
  }

  close() {
    for (const w of this.idle) w.kill();
    for (const w of this.busy.keys()) w.kill();
  }
}
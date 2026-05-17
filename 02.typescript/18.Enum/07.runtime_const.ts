enum FileAccess {
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write
}

console.log("文件访问: " + FileAccess.ReadWrite);
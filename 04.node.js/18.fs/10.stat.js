var fs = require("fs");

fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error('Error getting stats:', err);
        return;
    }
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('Size:', stats.size);
});


try {
    const stats = fs.statSync('example.txt');
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('Size:', stats.size);
} catch (err) {
    console.error('Error getting stats:', err);
}

var fs = require("fs");

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});
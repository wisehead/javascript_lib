fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});


try {
    fs.unlinkSync('example.txt');
    console.log('File deleted successfully');
} catch (err) {
    console.error('Error deleting file:', err);
}

var fs = require("fs");

console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});
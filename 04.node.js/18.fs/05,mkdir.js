fs.mkdir('new_directory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});

try {
    fs.mkdirSync('new_directory');
    console.log('Directory created successfully');
} catch (err) {
    console.error('Error creating directory:', err);
}

var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
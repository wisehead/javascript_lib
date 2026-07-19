fs.readdir('new_directory', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:', files);
});

try {
    const files = fs.readdirSync('new_directory');
    console.log('Directory contents:', files);
} catch (err) {
    console.error('Error reading directory:', err);
}

var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists');
    }
});

try {
    fs.accessSync('example.txt', fs.constants.F_OK);
    console.log('File exists');
} catch (err) {
    console.log('File does not exist');
}
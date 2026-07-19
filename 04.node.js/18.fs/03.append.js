fs.appendFile('example.txt', '\nAppending some text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Text appended successfully');
});

try {
    fs.appendFileSync('example.txt', '\nAppending some text');
    console.log('Text appended successfully');
} catch (err) {
    console.error('Error appending to file:', err);
}
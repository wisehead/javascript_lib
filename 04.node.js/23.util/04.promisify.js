const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

async function readConfig() {
  try {
    const data = await readFile('config.json', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readConfig();
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const dirPath = path.join(__dirname, '/output.txt');
const output = fs.createWriteStream(dirPath, { flags: 'a' });

console.log('Hello! Write something in the console:');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (consoleData) => {
  if (consoleData.toLowerCase() === 'exit') {
    console.log('Bye bye!');
    output.end();
    rl.close();
  } else {
    output.write(consoleData + '\n');
  }
});

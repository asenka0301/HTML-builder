const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(dirPath);
let data = '';
readableStream.on('data', (chunk) => (data += chunk));
readableStream.on('error', (error) => console.log('Error', error.message));
readableStream.on('end', () => console.log(data));

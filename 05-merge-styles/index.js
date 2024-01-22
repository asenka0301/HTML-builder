const fs = require('fs');
const path = require('path');

const pathStyles = path.join(__dirname, 'styles');
const cssBundleDest = path.join(__dirname, 'project-dist/bundle.css');
const output = fs.createWriteStream(cssBundleDest, { flags: 'w' });

fs.promises
  .readdir(pathStyles, { withFileTypes: true })
  .then((files) => {
    for (let file of files) {
      if (file.isFile() && path.extname(file.name) === '.css') {
        const cssFilePath = path.join(pathStyles, file.name);
        const readableStream = fs.createReadStream(cssFilePath);
        let stylesStr = '';
        readableStream.on('data', (chunk) => (stylesStr += chunk));
        readableStream.on('error', (error) =>
          console.log('Error', error.message),
        );
        readableStream.on('end', () => {
          output.write(stylesStr);
        });
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });

const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'files');

const pathDest = path.join(__dirname, 'files-copy');
fs.rm(pathDest, { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
    if (error) {
      return console.error(error);
    } else {
      fs.promises.readdir(folderPath, { withFileTypes: true }).then((files) => {
        for (let file of files) {
          const filePathSrc = path.join(file.path, file.name);
          const filePathDest = path.join(__dirname, 'files-copy', file.name);
          fs.copyFile(filePathSrc, filePathDest, (err) => {
            if (err) {
              console.log(err);
              return;
            }
          });
        }
      });
      console.log('created successfully');
    }
  });
});

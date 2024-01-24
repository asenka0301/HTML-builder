const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

function showFilesInFolerInfo(folderPath) {
  fs.promises
    .readdir(folderPath, { withFileTypes: true })
    .then((files) => {
      for (let file of files) {
        if (file.isFile()) {
          const filePath = path.join(folderPath, file.name);
          fs.stat(filePath, (_, stats) => {
            const extention = path.extname(file.name).slice(1);
            let fileName = '';
            if (!extention) {
              fileName = file.name;
            } else {
              const fileSplittedName = file.name.split('.');
              fileName = fileSplittedName.slice(0, -1).join('.');
            }
            const size = (stats.size / 1024).toFixed(3);
            const fileInfo = `${fileName} - ${extention} - ${size}kb`;
            console.log(fileInfo);
          });
        } else {
          showFilesInFolerInfo(path.join(folderPath, file.name));
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

showFilesInFolerInfo(folderPath);

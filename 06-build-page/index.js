// задание не закончено

// const fs = require('fs');
// const path = require('path');

// const templatePath = path.join(__dirname, 'template.html');
// const assetsPath = path.join(__dirname, 'assets');
// const componentsPath = path.join(__dirname, 'components');
// const stylesPath = path.join(__dirname, 'styles');
// const targetPath = path.join(__dirname, 'project-dist');

// const readFile = (pathToFile) => {
//   return new Promise((resolve, reject) => {
//     const readableStream = fs.createReadStream(pathToFile);
//     let fileData = '';
//     readableStream.on('data', (chunk) => {
//       fileData += chunk;
//     });
//     readableStream.on('error', (error) => reject(error));
//     readableStream.on('end', () => {
//       resolve(fileData);
//     });
//   });
// };

// const fillHtmlByComponents = (templateStr, pathToComponents) => {
//   let finalHtml = templateStr;
//   let substrToReplaceArr = [];
//   let promisesArr = [];
//   fs.promises
//     .readdir(pathToComponents, { withFileTypes: true })
//     .then((files) => {
//       for (let file of files) {
//         const [componentName] = file.name.split('.');
//         const substrToReplace = `{{${componentName}}}`;
//         if (
//           file.isFile() &&
//           path.extname(file.name) === '.html' &&
//           finalHtml.search(substrToReplace) !== -1
//         ) {
//           const componentFilePath = path.join(pathToComponents, file.name);
//           substrToReplaceArr.push(substrToReplace);
//           promisesArr.push(readFile(componentFilePath));
//         }
//       }
//       Promise.allSettled(promisesArr).then((components) => {
//         for (let i = 0; i < components.length; i++) {
//           finalHtml = finalHtml.replaceAll(
//             substrToReplaceArr[i],
//             components[i].value,
//           );
//         }
//         console.log(finalHtml);
//         return finalHtml;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const compileHtmlFile = (pathToTemplate, pathToComponents) => {
//   readFile(pathToTemplate).then((templateStr) => {
//     return fillHtmlByComponents(templateStr, pathToComponents);
//   });
// };

// console.log(compileHtmlFile(templatePath, componentsPath));

// const compileCssFile = (pathToStyles, pathDest) => {
//   fs.mkdir(pathDest, { recursive: true }, (error) => {
//     if (error) {
//       return console.error(error);
//     } else {
//       const cssOutput = fs.createWriteStream(
//         path.join(pathDest, 'styles.css'),
//         { flags: 'w' },
//       );

//       fs.promises
//         .readdir(pathToStyles, { withFileTypes: true })
//         .then((files) => {
//           for (let file of files) {
//             if (file.isFile() && path.extname(file.name) === '.css') {
//               const cssFilePath = path.join(pathToStyles, file.name);
//               const readableStream = fs.createReadStream(cssFilePath);
//               let stylesStr = '';
//               readableStream.on('data', (chunk) => (stylesStr += chunk));
//               readableStream.on('error', (error) =>
//                 console.log('Error', error.message),
//               );
//               readableStream.on('end', () => {
//                 cssOutput.write(stylesStr);
//               });
//             }
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   });
// };

// const copyAssets = () => {};

// const output = fs.createWriteStream(cssBundleDest, { flags: 'w' });

// fs.rm(targetPath, { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.mkdir(targetPath, { recursive: true }, (error) => {
//     if (error) {
//       return console.error(error);
//     } else {
//       fs.promises.readdir(folderPath, { withFileTypes: true }).then((files) => {
//         for (let file of files) {
//           const filePathSrc = path.join(file.path, file.name);
//           const filePathDest = path.join(__dirname, 'files-copy', file.name);
//           fs.copyFile(filePathSrc, filePathDest, (err) => {
//             if (err) {
//               console.log(err);
//               return;
//             }
//           });
//         }
//       });
//       console.log('created successfully');
//     }
//   });
// });

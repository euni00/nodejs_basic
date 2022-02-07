const fs = require('fs').promises;

// reading a file -> text를 buffer 형태로 파일을 읽어옴.
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ')
  .catch(console.error);

// 파일 덮어쓰기
  fs.writeFile('./file.txt', 'YO!, Dream Coders! :) ')
  .catch(console.error);

// appending file content (비동기 처리) Asynchronous 
fs.appendFile('./file.txt', 'YO!, Dream Coders! :) ')
  .then(() => {
    // copy
    fs.copyFile('./file.txt', './file2.txt')
      .catch(console.error);
  })
  .catch(console.error);

// copying file
fs.copyFile('./file.txt', './file2.txt')
  .catch(console.error);

// 중요! 동기 처리, 비동기 처리 

// folder
fs.mkdir('sub-folder')
  .catch(console.error);

fs.readdir('./')
  .then(console.log)
  .catch(console.error);
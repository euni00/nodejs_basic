const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 64 kbytes
    // encoding: 'utf-8',
});

const data = [];
fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 64 kbytes
    // encoding: 'utf-8',
}).on('data', chunk => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
});

readStream.on('end', () => {
    console.log(data.join(''));
});

readStream.on('error', error => {
    console.log(error);
});
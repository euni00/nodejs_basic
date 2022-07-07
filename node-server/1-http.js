const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

/* {
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
*/
// nodemon 1-http.js
const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if(url === '/courses') {
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    res.end();
});
server.listen(8080);

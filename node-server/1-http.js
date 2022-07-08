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
// res.end(); -> 요청자에게 응답을 하고 나면, 세션을 종료하는 작업. 어떤 데이터도 담지 않고 보낼 수 있으며,
// 에러 페이지가 필요할 땐 데이터를 담지 않고 쓸 수 있음.
});
server.listen(8080);

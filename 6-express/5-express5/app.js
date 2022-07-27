// npm init --yes
// npm i express@5.0.0-alpha.8
import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors');  // CommonJS module
import {} from 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    // try { 
    // const data = fs.readFileSync('/file.txt');
    // // fs.readFile('/file1.txt', (err, data) => {});
    // } catch (error) {
    //     res.status(404).send('File not found');
    // }

    try {
        
    fs.readFile('/file1.txt', (err, data) => {
        if (err) {
            
        }
    });
    } catch (error) {
        res.status(404).send('File not found');
    }
});

app.get('/file2', (req, res) => { 
    return fsAsync.readFile('/file.txt')
    // .catch((error) => res.status(404).send('File not found'));
});
// 비동기는 try - catch로 오류를 잡을 수 없다.

app.get('/file3', async (req, res) => {
    // try {
    const data = await fsAsync.readFile('/file.txt');
    // } catch (error) {
    //     res.status(404).send('File not found');
    // }
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({message: 'Something went wrong' });
});

app.listen(8080);

// async function number() {
//     return 2;
// }
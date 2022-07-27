import express from 'express';
// import postRouter from './router/post.js';
// import userRouter from './router/user.js';

const app = express();

app.use(express.json());
app.post('/posts', (req, res) => {
    console.log(req, body);
    res.status(201).send('Thanks, Created');
});

const options = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge: 'id',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};


app.use(express.static('public', options));
app.listen(8080);
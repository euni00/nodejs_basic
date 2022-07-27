import express from 'express';

const app = express();

app.use(express.json());

app.route('/posts')
    .get((req, res, next) => {
        res.status(201).send('GET: /posts');
    }).post('/posts', (req, res) => {
        res.status(201).send('GET: /posts');
    });

app.route('/posts/:id')
    .put('/posts/:id', (req, res) => {
        res.status(201).send('PUT: /posts/:id');
    }).delete('/posts/:id', (req, res) => {
        res.status(201).send('DELETE: /posts/:id');
    });

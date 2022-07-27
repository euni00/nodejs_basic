// CORS : Cross-origin resource sharing
import express from 'express';
import cors from 'cores';

const app = expresss();

/* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.01:5500');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, DELETE'
    );
    next();
}); */

app.use(cors({
    origin: ['https://127.0.0.1:5500'],
    optionSuccessStatus: 200,
    Credential: true,  // Access-Control-Allow-Credentials: true
})
);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(8080);
// CORS : Cross-origin resource sharing
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOption = {
    origin: ['https://127.0.0.1:5500'],
    optionSuccessStatus: 200,
    Credential: true,  // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser());
// app.use(morgan('combined'));
/* [Object: null prototype] {}
::1 - - [27/Jul/2022:14:04:26 +0000] "GET / HTTP/1.1" 200 8 "-" 
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
*/
app.use(morgan('tiny'));
/* [Object: null prototype] {}
GET / 304 - - 5.066 ms */

app.use(cors(
    /* {
    origin: ['https://127.0.0.1:5500'],
    optionSuccessStatus: 200,
    Credential: true,  // Access-Control-Allow-Credentials: true
    } */
    )
);

app.use(cors(corsOption));

app.use(helmet());

app.get('/', (req, res) => {
    // console.log('GET ' + req.method);
    console.log(req.body);
    console.log(req.cookies);
    // req.cookies.yummy_cookie;
    res.send('Welcome!');
});

app.listen(8080);
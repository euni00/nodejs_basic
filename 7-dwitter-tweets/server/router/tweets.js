import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data.tweets';
const tweets = [
{
    id: '1',
    text: 'yeeunlee project',
    createdAt: Date.now().toString(),
    name: 'yeeunlee',
    username: 'yeeunlee',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
}
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter((tweet) => (tweet).username === username)
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll();
    res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweetRepository.getById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(%{id}) not found` });
    }
});

// POST /tweets
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = tweetRepository.create(text, name, username);
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweetRepository.update(id, text);
    if (tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
});

// DELETE /tweets/:id
router.remove('/id', (req, res, next) => {
    const id = req.params.id;
    tweetRepository.delete(id);
    res.sendStatus(204);
});

export default router;
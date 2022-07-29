import express from 'express';
import 'express-async-errors';

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
        : tweets;
    res.status(200).json(data);
});

// GET /tweets/:id
// POST /tweets
// PUT /tweets/:idㅇㅇㅇ
// DELETE /tweets/:id
export default router;
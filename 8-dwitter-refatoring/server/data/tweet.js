const tweets = [
{
    id: '1',
    text: 'yeeunlee project',
    createdAt: Date.now().toString(),
    name: 'yeeunlee',
    username: 'yeeunlee',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: '안뇽!',
        createAt: Date.now().toString(),
        name: 'Amy',
        username: 'Amy',
    },
];

export function getAll() {
    return tweets;
}

export function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username)  {
    const tweet = {
        id: Date.now().toString(),
        text,
        createAt: new Date(),
        name, 
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
};

export function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id)
}
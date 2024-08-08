import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(bodyParser.json());

const comments = [
    { id: uuidv4(), username: 'Todd', comment: 'lol so funny' },
    { id: uuidv4(), username: 'Skyler', comment: 'I like turtles' },
    { id: uuidv4(), username: 'Sk8erBoi', comment: 'Plz delete this post' },
    { id: uuidv4(), username: 'Ada', comment: 'that is so 2008' },
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const newComment = { id: uuidv4(), username, comment };
    comments.push(newComment);
    res.status(201).send(newComment);
});

app.delete('/comments/:index', (req, res) => {
    const { index } = req.params;
    if (index >= 0 && index < comments.length) {
        const deletedComment = comments.splice(index, 1);
        res.send(deletedComment);
    } else {
        res.status(404).send('Comment not found');
    }
});

app.listen(4001, () => {
    console.log('Server listening on 4001');
});

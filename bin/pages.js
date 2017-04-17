const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

const talks = [
    {
        title: 'Intelligent Design: Application Architecture of the Human body',
        description: 'ladfhjkajsdhflkahjslkjh ladfhsl kadhslk ahldfjksh ladlk adhjflkjh asdfladskl ahsdfjklh ladhjsflkahsflkjhasfladfhslkadhsfkljh lkaj lkjahsdflkjha sdfjkll  lkadhs flkjadhslkjh afjklladfhslkjadhsfljkhaslfhs lkafhjs lk  lk kljadhs fklj aljk h          kljhs',
        presenter: {
            name: 'Brian J. Brennan',
            intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
            twitter: 'twitter',
            github: 'github',
            iconUrl: '/img/avatar-placeholder.jpg'
        }
    }
]
talks.push(talks[0])
talks.push(talks[0])
talks.push(talks[0])

const svg = fs.readFileSync(path.resolve(__dirname, '../src/img/wr_letterlogo.svg'), {
    encoding: 'utf8',
});

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
        talks: talks,
        svg: svg
    });
});

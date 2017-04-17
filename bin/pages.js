const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

const day1 = 'Thursday, 2 June';
const day2 = 'Friday, 3 June';
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
        },
        date: day1,
        time: '09:45'
    }
]
talks.push(talks[0])
talks.push(talks[0])
talks.push(talks[0])

const days = {
    [day1]: {
        description: 'Welcome to the first day of the conference',
        schedule: [
          {
              title: 'Registration and breakfast',
              details: 'As the tradition goes, no need for that hotel breakfast! Join us for a Rebel breakfast instead.',
              time: '08:00'
          }
        ]
    },
    [day2]: {
        description: 'Conference day #2, with 8 more talks starting at 09:00.',
        schedule: [
            {
                title: 'Registration and breakfast',
                details: 'As the tradition goes, no need for that hotel breakfast! Join us for a Rebel breakfast instead.',
                time: '08:00'
            }
        ]
    }
}

talks.forEach((talk) => {
    days[talk.date].schedule.push({title: talk.title, details: talk.description, time: talk.time})
})

days[day1].schedule.push({
    title: '',
    details: 'Conference dinner and social gathering right next door to the venue.',
    time: '18:00'
})

const svg = fs.readFileSync(path.resolve(__dirname, '../src/img/wr_letterlogo.svg'), {
    encoding: 'utf8',
});

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
        talks: talks,
        days: days,
        svg: svg
    });
});

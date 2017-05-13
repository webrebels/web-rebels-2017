const fs = require('fs');
const path = require('path');
const express = require('express');
const { day1, day2, talks } = require('../talks')
const router = express.Router();
module.exports = router;

const days = {
    [day1]: {
        description: 'Welcome to the first day of the conference',
        schedule: [
            {
                title: 'Registration and breakfast',
                details: 'As the tradition goes, no need for that hotel breakfast! Join us for a Rebel breakfast instead.',
                time: '08:00',
            },
        ],
    },
    [day2]: {
        description: 'Conference day #2, with 8 more talks starting at 09:00.',
        schedule: [
            {
                title: 'Registration and breakfast',
                details: 'As the tradition goes, no need for that hotel breakfast! Join us for a Rebel breakfast instead.',
                time: '08:00',
            },
        ],
    },
};

talks.forEach((talk) => {
    days[talk.date].schedule.push({ title: talk.title, details: talk.description, time: talk.time });
});

days[day1].schedule.push({
    title: '',
    details: 'Conference dinner and social gathering right next door to the venue.',
    time: '18:00',
});

function readFile(pathToFile) {
    return fs.readFileSync(
        path.resolve(__dirname, pathToFile),
        { encoding: 'utf8' }
    );
}

const wrSvg = readFile('../src/img/wr_letterlogo.svg');
const fistSvg = readFile('../src/img/raised-fist.svg');
const jsSvg = readFile('../src/img/js_logo.svg');
const scrollScript = readFile('../src/js/zenscroll-min.js');
let css;
if (process.env.HOT_RELOADING !== 'true') {
    css = `<style>${readFile('../public/main.css')}</style>`;
} else {
    css = '<script src="http://localhost:8080/main.js"></script>';
}
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
        talks,
        days,
        wrSvg,
        fistSvg,
        jsSvg,
        cssLink: css,
        scrollScript,
    });
});

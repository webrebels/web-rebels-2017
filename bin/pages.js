const fs = require('fs');
const path = require('path');
const express = require('express');
const { day1, day2, talks, workshops, days } = require('../talks')
const router = express.Router();
module.exports = router;

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
        workshops,
        days,
        wrSvg,
        fistSvg,
        jsSvg,
        cssLink: css,
        scrollScript,
    });
});


router.get('/roadbook', (req, res) => {
    res.render('roadbook', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
        cssLink: css
    });
});

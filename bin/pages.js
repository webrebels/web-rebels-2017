const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

router.use((req, res, next) => {
    // const css = fs.readFileSync(path.resolve(__dirname, '../public/main.css'), {
    //     encoding: 'utf8',
    // });
    req.css = null;
    next();
});

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/home', (req, res) => {
    res.render('home', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/cfp', (req, res) => {
    res.render('cfp', {
        pageTitle: 'Web Rebels ☠ Call For Papers',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'Web Rebels ☠ About',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/policies', (req, res) => {
    res.render('policies', {
        pageTitle: 'Web Rebels ☠ Policies',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/location', (req, res) => {
    res.render('location', {
        pageTitle: 'Web Rebels ☠ Location',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/travel', (req, res) => {
    res.render('travel', {
        pageTitle: 'Web Rebels ☠ Traveling',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/tickets', (req, res) => {
    res.render('tickets', {
        pageTitle: 'Web Rebels ☠ Ticket Sales 2017',
        header: 'penthouse',
        css: req.css,
    });
});


router.get('/speakers', (req, res) => {
    res.render('speakers', {
        pageTitle: 'Web Rebels ☠ Speakers 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/oslo', (req, res) => {
    res.render('oslo', {
        pageTitle: 'Web Rebels ☠ Survival Guide',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/family', (req, res) => {
    res.render('family', {
        pageTitle: 'Web Rebels ☠ Families',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/schedule', (req, res) => {
    res.render('schedule', {
        pageTitle: 'Web Rebels ☠ Schedule 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/sponsors', (req, res) => {
    res.render('sponsors/index', {
        pageTitle: 'Web Rebels ☠ Sponsors 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/sponsors/packages', (req, res) => {
    res.render('sponsors/packages', {
        pageTitle: 'Web Rebels ☠ Sponsorship Options 2017',
        header: 'penthouse',
        css: req.css,
    });
});

router.get('/scholarship', (req, res) => {
    res.render('scholarship/index', {
        pageTitle: 'Web Rebels Scholarship Programme',
        header: 'penthouse',
        css: req.css,
    });
});


/*
router.get('/roadbook', (req, res) => {
    res.render('roadbook', {
        pageTitle: 'Web Rebels ☠ Speaker Roadbook',
        header: 'penthouse',
        css,
    });
});
*/
router.get('/buytickets', (req, res) => {
    res.redirect('https://ti.to/webrebels/2017');
});

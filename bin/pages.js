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
        talks: talks
    });
});

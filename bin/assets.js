'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');

const router = module.exports = express.Router();

router.get('/css/styles.css', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.createReadStream(path.resolve(__dirname, '../public/main.css'));
});

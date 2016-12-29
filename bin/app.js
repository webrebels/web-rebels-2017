'use strict';

const path = require('path');
const http = require('http');

const compress = require('compression')();
const express = require('express');
const helmet = require('helmet');
const hbs = require('hbs');
const serveStatic = require('serve-static');
const bole = require('bole');

const app = express();

const config = require('../config');
const middleware = require('./middleware.js');
const pages = require('./pages.js');

// Configure logging
bole.output({
    level: config.get('logConsoleLevel'),
    stream: process.stdout,
});

// Configure application
app.disable('x-powered-by');
app.enable('trust proxy');


// Set up template engine
hbs.registerPartials(path.resolve(__dirname, '../views/partials/'));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../views/'));

// Set middleware
app.use(middleware.ssl);
app.use(compress);

app.use(serveStatic(path.resolve(__dirname, `..${config.get('docRoot')}`), {
    maxAge: '30d',
}));


app.use(helmet.hsts({
    maxAge: 15724800000, // 26 weeks
    includeSubdomains: true,
    preload: true,
}));
app.use(helmet.frameguard('deny'));


// Set up all other routes
app.use(pages);


// Set up routes only used in development
if (config.get('env') === 'development') {
    app.use(require('./assets.js')); /* eslint global-require: 0 */
}


// Set up http server
module.exports = http.createServer(app);

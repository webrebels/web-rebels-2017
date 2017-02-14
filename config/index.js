const path = require('path');
const fs = require('fs');
const convict = require('convict');
const pckage = require('../package.json');

const conf = convict({
    env: {

        doc: 'Applicaton environments',
        format: ['development', 'production'],
        default: 'development',
        env: 'NODE_ENV',
        arg: 'env',
    },

    version: {
        doc: 'Version of the application',
        format: '*',
        default: pckage.version,
    },

    httpServerPort: {
        doc: 'The port the server should bind to',
        format: 'port',
        default: 8000,
        env: 'PORT',
        art: 'port',
    },

    docRoot: {
        doc: 'Document root for static files to be served by the http server',
        format: '*',
        default: '/src',
        env: 'NODE_HTTP_DOC_ROOT',
    },

    logConsoleLevel: {
        doc: 'Which level the console transport log should log at',
        format: '*',
        default: 'info',
        env: 'NODE_LOG_CONSOLE_LEVEL',
        arg: 'log-console-level',
    },

});

const env = conf.get('env');
if (fs.existsSync(path.resolve(__dirname, '../config/local.json'))) {
    conf.loadFile([path.resolve(__dirname, '../config/', `${env}.json`), path.resolve(__dirname, '../config/local.json')]);
} else {
    conf.loadFile([path.resolve(__dirname, '../config/', `${env}.json`)]);
}
conf.validate();

module.exports = conf;

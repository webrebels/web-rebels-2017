const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

const day1 = 'Thursday, 2 June';
const day2 = 'Friday, 3 June';
const talkTitle = 'Intelligent Design: Application Architecture of the Human body'
const talkDescription = 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit.'
const talks = [
    {
        title: talkTitle,
        description: talkDescription,
        presenter: {
            name: 'Arne Martin Aurlien',
            intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
            twitter: 'twitter',
            github: 'github',
            iconUrl: '/img/speakers/arne.martin.aurlien.jpg'
        },
        date: day1,
        time: '09:45',
    },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/benedikt-meurer.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/harlie.gerard.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/franziska.hinkelmann.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/an.krutisch.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/jana-beck.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/ared.forsyth.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/john.feminella.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/agnús-dæhlen.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/marcy-sutton.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/ariko.kosaka.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/mathias-buus-madsen.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/atteo-collina.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/mike.taylor.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/aquel.vélez.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/steve.kinney.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/usan-hinton.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/thomas-watson.jpg'
    },
    date: day1,
    time: '09:45',
  },
  {
    title: talkTitle,
    description: talkDescription,
    presenter: {
      name: 'Arne Martin Aurlien',
      intro: 'Brain thinks code, art and jokes are a grand slam, and tries to do something something something.',
      twitter: 'twitter',
      github: 'github',
      iconUrl: '/img/speakers/iberius.hefflin.jpg'
    },
    date: day1,
    time: '09:45',
  },
];

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
if (process.env.NODE_ENV === 'production') {
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

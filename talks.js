const day1 = 'Thursday, 2 June';
const day2 = 'Friday, 3 June';
const talks = [
  {
    title: 'Compiling (or “transpiling” or whatever) to JS',
    description: `How do programming languages that compile to JS work? How are they made?
<br/><br/>
Let’s find out, together! We will go on a journey where the end result is a brand new compile-to-JS language.`,
    presenters: [{
      name: 'Arne Martin Aurlien',
      intro: 'Arne Martin is a web developer and partner at a very small agency in Trondheim, where he lives with his wife and daughter and pet polar bear. He sings both in and out of the shower.',
      twitter: 'arnemart',
      github: '',
      iconUrl: '/img/speakers/arne_martin_aurlien.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'ESnext Performance - Why bother?',
    description: 'ES2015 added a lot of sex appeal to JavaScript, and ES2016/17 make it even more sexy. Babel and friends allow everyone to use ESnext today, but lead to large JavaScript bundles and sluggish page load. <br/><br/>To really shine, ESnext features need to be supported natively, and they must be reasonably fast.',
    presenters: [{
      name: 'Benedikt Meurer',
      intro: 'Benedikt is a JavaScript compiler engineer who loves to tinker with different aspects of programming languages and the various nasty details of their runtimes. <br/><br/> At Google he is the Tech Lead of the JavaScript Execution Optimization Team, working on the V8 JavaScript engine that powers both Node.js and Chrome.',
      twitter: 'bmeurer',
      github: '',
      iconUrl: '/img/speakers/benedikt_meurer.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Look mum, no hands!',
    description: 'A typical interaction with a device or interface involves touching it. Either you’re pressing buttons on a controller, swiping on a touchscreen or clicking on your laptop’s trackpad. But what if you could control things without the use of your hands? What if you could use… your thoughts?',
    presenters: [{
      name: 'Charlie Gerard',
      intro: 'I come from a marketing background and changed career a couple of years ago to become a developer. I started my dev career as a Software Developer and consultant @ ThoughtWorks in Sydney, working on various types of projects from small websites for startups to complex software for big corporations. I quickly developed a great interest in tinkering with hardware, cutting edge technologies and creative coding. Therefore, I have spent a lot of my personal time over the past few years prototyping projects to mix technology, design and art. <br/><br/>I also contribute to the community by writing tutorials about my experiments and by giving talks at meetups and coding bootcamps to share my passion for creative technologies and hopefully motivate developers to explore that space. I recently moved to London in the hope of being part of more innovative projects.',
      twitter: 'charlie__gerard',
      github: 'charliegerard',
      iconUrl: '/img/speakers/charlie_gerard.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'JavaScript engines - how do they even?',
    description: 'Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We’ll look at basic concepts of compilers, challenges posed by modern JavaScript, and how to write compiler-friendly JavaScript.',
    presenters: [{
      name: 'Franziska Hinkelmann',
      intro: "Franziska has a Ph.D. in mathematics and is a software engineer on Google’s V8 team. She's an expert on ES6 performance and a Node.js core collaborator. <br /><br />When she's not working hard on making JavaScript and Node faster, she's probably out horseback riding.",
      twitter: 'fhinkel',
      github: '',
      iconUrl: '/img/speakers/franziska_hinkelmann.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Hello? Yes, this is Synth - Making Hardware better with the Web',
    description: 'Join me on a fast paced ride through the exciting possibilities, mind boggling bugs, impossible challenges and fun experiments of building a unique, stable and successful web application to augment a hardware synthesizer using cutting edge browser APIs.',
    presenters: [{
      name: 'Jan Krutisch',
      intro: 'Currently in transition to becoming a proper grey beard, I’m old enough to remember a world without the web, or cyberspace as we used to call it. <br/><br/>I’m a web developer by day, working on tools for designers and developers at Flowbyte, and a musician and general digital artist by night. Actually, usually I sleep at night, but you know what I mean.',
      twitter: 'halfbyte',
      github: '',
      iconUrl: '/img/speakers/jan_krutisch.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'JavaScript therapy',
    description: 'Generator functions are pause-able(!) functions, a strange concept that only gets stranger as you learn to put generator code inside while (true) loops(!!). <br/><br/>This talk aims to help, just like the classic therapist program Eliza, which we’ll reimplement on our path to understanding generators.',
    presenters: [{
      name: 'Jana Beck',
      intro: 'Jana Beck is a coffee-fueled engineer at a small open-source and not-for-profit startup called Tidepool, based in the Bay Area of California but with developers on three continents. Tidepool’s mission is to reduce the burden of type 1 diabetes through data technology, and Jana works mostly on Tidepool’s front-end stack (React with redux; D3 for data visualization).<br/><br/> When she’s not coding or sleeping, there’s a high probability that Jana is sweating in a gym or a dance studio.',
      twitter: '',
      github: '',
      iconUrl: '/img/speakers/jana_beck.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Type systems will make you a better JavaScript developer',
    description: 'Flow and TypeScript promise “types in js” - but what does that get you, exactly? What’s the experience of adding types to a large project? Is the overhead worth it for you and your team? In the end, type systems will give you more confidence in your code, fewer bugs, and a much friendlier codebase.',
    presenters: [{
      name: 'Jared Forsyth',
      intro: 'I interned on the React Native team, I rewrote the React devtools, and I’ve given several talks on React & related technologies. I work at Khan Academy on the mobile team, where I work in Swift, ObjC, Java, and Javascript. <br/><br/>I love type systems and learning new languages, and I’m deeply invested in improving the experience of programming for everyone.',
      twitter: '',
      github: '',
      iconUrl: '/img/speakers/jared_forsyth.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Who Gives a Fuck About a Monad? Functional Programming for People Who Hate Math',
    description: 'Functional programming means cleaner code, easier maintenance, and simpler testing, but most of us will never use it because it’s explained in such a complex, mathematical, and confusing way. This talk explains how we can get the benefits of functional programming today — no math required.',
    presenters: [{
      name: 'Jason Lengstorf',
      intro: `Jason Lengstorf is a developer, designer, author, and friendly bear. He’s worked in nearly every role in an agency and uses his 14+ years of experience to offer a unique, cross-functional approach to solving complex problems. He has written several books and dozens of tutorials about development, built and sold a successful web agency, and created award-winning web projects for companies including PlayStation, Intel, and Precision Nutrition.
<br/><br/>
Jason is passionate about building better careers by first focusing on building better lives. He focuses on work-life balance, efficiency, processes, and productivity to help people get more done in less time — so they can spend more time on the things that matter most. Jason recently joined IBM Design as a senior front-end developer and mentor to new hires, where he hopes to scale this philosophy throughout one of the largest companies in the world.
<br/><br/>
He lives in Austin, TX, spends most of his disposable income on food and travel, and can often be spotted in the forest foraging for nuts and berries.`,
      twitter: 'jlengstorf',
      github: '',
      iconUrl: '/img/speakers/jason_lengstorf.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Time and Time Again: Fixing Dates in JS',
    description: `In JavaScript, times and dates can take many forms, but none of them represent a complete, unambiguous answer to the simple question “what time is it?”. While almost anyone can look at a clock at determine what time it is, it turns out that humans encode an enormous amount of hidden information into their representations of date and times. Because computers don’t have the benefit of knowing about this hidden information, times can be much more ambiguous.
<br/><br/>
In this talk, we’ll show how to extend our mental model of JS dates and times so that they become useful. Starting from our everyday understanding, we’ll progress through successively larger and more comprehensive representations until we get to a much more complete picture of how things should work. By the end of the talk, you’ll have an appreciation for how complicated dates and times really are, and you’ll be able to confidently avoid the most common pitfalls.`,
    presenters: [{
      name: 'John Feminella',
      intro: `John Feminella is an avid technologist, occasional public speaker, and curiosity advocate. He serves as an advisor to Pivotal, where he works on helping enterprises transform the way they write, operate, and deploy software. He’s also the cofounder of a tiny analytics monitoring and reporting startup named UpHex.
<br/><br/>
John lives in Charlottesville, VA and likes meta-jokes, milkshakes, and referring to himself in the third person in speaker bios.`,
      twitter: 'jxxf',
      github: '',
      iconUrl: '/img/speakers/john_feminella.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'A Room With a Vue',
    description: 'In this crazy jungle of js frameworks, we got yet another one. Vue.js was officially released in late 2015 and started accumulating followers during 2016. Today it is already released as a 2.0 and a serious contender to React and Angular. I will tell more about this outsider.',
    presenters: [{
      name: 'Magnús Dæhlen',
      intro: `My name is Magnús Dæhlen. I am a consultant at Iterate and is currently a hired gun at Cisco. I just love attention. Probably why I kinda love playing in the band For a While better than IT, but who knows. <br/><br /> In between music and IT, I try to be a good husband and dad as well as keeping way to many hobbies alive.
That’s mostly it.`,
      twitter: '',
      github: '',
      iconUrl: '/img/speakers/magnus_daehlen.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'JavaScript and Civil Rights: Using Your Skills For The Good of the People',
    description: 'Accessibility is a civil right. We can take inspiration from Norway’s strict accessibility policy and make a business case for inclusion by building it into our projects using open source JS tools. I want to teach developers everywhere they are capable of making a big difference with code.',
    presenters: [{
      name: 'Marcy Sutton',
      intro: 'Marcy Sutton works as a meta web developer on accessibility tools for other developers at Deque (DQ) Systems, a company focused on digital equality. Marcy is passionate about making the web accessible for everyone. <br/><br/>She loves applying her skills and personal values on the axe-core project, speaking at conferences around the world and producing accessibility screencasts for Egghead.io. <br/><br/>Her blog, Accessibility Wins, highlights accessible user interfaces and tools, contributing a positive voice to the web development space. When away from the keyboard, Marcy can usually be found hiking, riding a bicycle or snowboarding.',
      twitter: 'marcysutton',
      github: '',
      iconUrl: '/img/speakers/marcy_sutton.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Can You Read Me? Creative JavaScript to Make Computer Science Fun',
    description: 'Two web developers who are full of curiosity to learn all about machines and code met at a meetup. Unsatisfied with traditional computer science textbook and what we felt like not so learner friendly software engineering landscape, we decided to learn by working together in the format we enjoy the most - creative project.<br/><br/>We are building machines (both software and hardware) in JavaScript to send secret messages to each other. Different forms of data blob are exchanged periodically as a message. In order to read those messages, each has to learn and build a system to decode the data.<br/><br/>This talk will tell the story of the machines, their parts, and the possibilities of remote creative collaboration. You’ll come away with fresh inspiration on how JavaScript can be used to learn computer science concepts the enjoyable way.',
    presenters: [
      {
        name: 'Mariko Kosaka',
        intro: 'Mariko is an engineer who loves data and knitting. When she is not making software at Scripto, she uses code to help her design textiles & organize a local JavaScript meetup in New York City called BrooklynJS.',
        twitter: '',
        github: '',
        iconUrl: '/img/speakers/mariko_kosaka.jpg'
      },
      {
        name: 'Suz Hinton',
        intro: `Suz Hinton is a JavaScript developer who likes to tinker with hardware. <br/><br/>Beside of being a technical evangelist at Microsoft she's a maker at heart and no stranger to minor burns from soldering irons and 3D printers. She's a regular contributor to the open source Node.js electronics scene, and enjoys teaching others how to immerse themselves in the nerdiverse.`,
        twitter: '',
        github: '',
        iconUrl: '/img/speakers/susan_hinton.jpg'
      }
    ],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Workshop: Learn to P2P',
    description: `Come join the latest chapter in our series of "Learn to P2P" workshops. <br/><br/> The focus will be how to build systems that support streaming and sharing of real time data. The workshop will consist of a series of small iterative exercises that will take you through the basics of networking and distributed systems, all the way to learning how you can make your own P2P TV and radio stations.
<br/><br/>There will be content for everybody, no matter your skill level.
We'll be using Node.js but the techniques will work across any programming language.
`,
    workshop: true,
    presenters: [
      {
        name: 'Mathias Buus Madsen',
        intro: `Mathias lives in Copenhagen, Denmark. He tends to publish a lot stuff on <a href="github.com/mafintosh">github</a>.<br/><br/>
  In the last years he has mainly been working with distributed systems and peer to peer in node (among other things he wrote a streaming torrent client called torrent-stream, a torrent video player and a torrent based file system).<br/><br/>
  He also works on the <a href="https://dat-data.com">dat project</a> where we’re trying to revolutionize how data is being shared and versioned.`,
        twitter: '',
        github: 'mafintosh',
        iconUrl: '/img/speakers/mathias_buus_madsen.jpg'
      },
      {
        name: 'Thomas Watson',
        intro: 'Thomas Watson is an open source Node.js hacker out of Copenhagen, Denmark. He is a member of the Node.js Diagnostics Working Group and is the Node.js. Lead at Opbeat – a JavaScript performance analysis and monitoring startup. <br/><br/>He maintains over a 100 open source projects, enjoys working with mad science and implementing network protocols in JavaScript.',
        twitter: '',
        github: '',
        iconUrl: '/img/speakers/thomas_watson.jpg'
      }
    ],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Building a Scalable Pub/Sub system with UpRing',
    description: `The world is real-time: our users expect to receive live notifications, updates, and use extremely reactive interfaces. In a real-time world, we might want to connect physical things, each of them with their own live connection to the cloud. Delivering live notifications has always been a complex task, but tools like WebSockets and Socket.io have enabled a wide range of applications to flourish.
<br/><br/>
Scaling those systems often turns out to be problematic. Generally an external publish/subscribe broker is leveraged to deliver the messages, with our application or the framework acting as a proxy. These brokers are usually central points of failure, and extremely difficult to scale.
<br/><br/>
UpRing is a distributed system framework for building applications on top of a Consistent Hashring. In other words, UpRing is a P2P system for cloud applications. With UpRing, all the notifications for a single element are routed through the same server, removing the central point of failure and allowing for fine-grained elastic scalability in ratio to the amount of current users.`,
    presenters: [{
      name: 'Matteo Collina',
      intro: `Matteo is a code pirate and mad scientist. He spends most of his days programming in node.js, but in the past he worked with Ruby, Java and Objective‑C.<br/><br/>
He recently got a Ph.D. with a thesis titled "Application Platforms for the Internet of Things". Now he is a Software Architect at nearForm, where he consults for the top brands in world. Matteo is also the author of the Node.js MQTT Broker, Mosca and of the LevelGraph database. He is also co-author of the book "Javascript: Best Practices" edited by FAG, Milan.`,
      twitter: 'matteocollina',
      github: '',
      iconUrl: '/img/speakers/matteo_collina.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Doing the Unstuck: How to make browsers compatible with the web',
    description: 'What does it mean for JavaScript and CSS to be — or not to be — compatible with the web? Is it possible for a site written today to continue to work in 10 years? Likewise, could existing code complicate adding language features or fixing mistakes in web APIs?<br/><br/>In this talk I\'ll discuss the issues that arise when browsers attempt to clean up the web platform, either by adding new language features and DOM APIs or removing old ones — while attempting to remain backwards compatible. I\'ll even talk about some controversial moves made by browsers to support non-standard (cough webkit prefixes) CSS and JS.',
    presenters: [{
      name: 'Mike Taylor',
      intro: 'Mike Taylor is a Web Compatibility Engineering Manager at Mozilla, working from Austin, TX. Previously he worked as a Web Opener at Opera Software, which is a funny title for pretty much the same thing (minus the management bit).',
      twitter: '',
      github: '',
      iconUrl: '/img/speakers/mike_taylor.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'The Beauty of Bad Code',
    description: 'No one likes writing bad code. But what is it? How can we prevent it? And is it *really* that bad? Let’s dive in!',
    presenters: [{
      name: 'Raquel Vélez',
      intro: '',
      twitter: 'rockbot',
      github: '',
      iconUrl: '/img/speakers/raquel_velez.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Bringing Back the 1990s: The Revenge of JavaScript Style Sheets',
    description: 'JavaScript Style Sheets were an early competitor to CSS. Spoiler alert: CSS won. In the decades since, JSSS has had a growing influence on how we thinking about styling web applications. CSS and SASS cribbed a few moves from JSSS and some emerging approaches are set to bring it back from the dead.',
    presenters: [{
      name: 'Steve Kinney',
      intro: 'Steve is the founding director of the Front-End Engineering Program at the Turing School of Software and Design in Denver, Colorado where he teaches JavaScript and other technologies to aspiring developers. <br/><br/>He’s also the lead organizer for DinosaurJS, which is also part of the JSConf Family of Conferences. He’s slowly, but surely, writing a book on Electron. He is a recovering New York City public school teacher and recently learned how to drive a car. Definitely not a lizard.',
      twitter: 'stevekinney',
      github: '',
      iconUrl: '/img/speakers/steve_kinney.jpg'
    }],
    date: day1,
    time: '09:45',
  },
  {
    title: 'Security Starts With You: Social Engineering',
    description: 'Virus? There’s an app for that. Malware? There’s an app for that. Social engineering? It’s a little more complicated. <br/><br/>Aimed at average users who could be targeted by such an attack, I will look at the tools of social engineering, how to avoid them & why companies fail to prep employees for attacks.',
    presenters: [{
      name: 'Tiberius Hefflin',
      intro: 'Tibbs recently graduated from the University of West of Scotland with a degree in computer security. She has relocated to Portland, OR, where she evangelizes for privacy and security while doing security assurance work for Portland General Electric. <br/><br/>She is passionate about encouraging small children to take the plunge into STEM and about laughing at cats on the internet.',
      twitter: 'whatatiberius',
      github: '',
      iconUrl: '/img/speakers/tiberius_hefflin.jpg'
    }],
    date: day1,
    time: '09:45',
  },
];

const days = {
  [day1]: {
    description: 'Welcome to the first day of the conference <br> Follow the conference talks live on <a href="https://youtu.be/4WbpKSh0FWk">YouTube</a> from 09:00 to 18:00',
    schedule: [
      {
        title: 'Registration and breakfast',
        details: 'As the tradition goes, no need for that hotel breakfast! Join us for a Rebel breakfast instead.',
        time: '08:00',
      },
      {
        details: 'Mike Taylor',
        title: 'Doing the Unstuck: How to make browsers compatible with the web',
        time: '09:00'
      },
      {
        details: 'Steve Kinney',
        title: 'Bringing Back the 1990s: The Revenge of JavaScript Style Sheets',
        time: '09:45'
      },
      {
        title: 'Coffee/tea break',
        details: '',
        time: '10:30'
      },
      {
        details: 'Magnús Dæhlen',
        title: 'A Room With a Vue',
        time: '11:00'
      },
      {
        details: 'Jason Lengstorf',
        title: 'Who Gives a Fuck About a Monad? Functional Programming for People Who Hate Math',
        time: '11:45'
      },
      {
        title: 'Lunch',
        details: '',
        time: '12:30'
      },
      {
        time: '13:30',
        details: 'Tiberius Hefflin',
        title: 'Security Starts With You: Social Engineering'
      },
      {
        time: '14:15',
        details: 'Marcy Sutton',
        title: 'JavaScript and Civil Rights: Using Your Skills For The Good of the People'
      },
      {
        time: '15:00',
        title: 'Coffee/tea break',
        details: ''
      },
      {
        time: '15:30',
        details: 'Charlie Gerard',
        title: 'Look mum, no hands!'
      },
      {
        time: '16:15',
        details: 'Arne Martin Aurlien',
        title: 'Compiling (or “transpiling” or whatever) to JS',
      },
      {
        time: '17:00',
        details: 'Jared Forsyth',
        title: 'Type systems will make you a better JavaScript developer'
      },
      {
        time: '18:00',
        title: 'Conference dinner and social gathering',
        details: 'right next door to the venue.'
      }
    ],
  },
  [day2]: {
    description: 'Conference day #2, with 8 more talks starting at 09:00. <br> Follow the conference talks live on <a href="https://youtu.be/acIOV8wtkOo">YouTube</a> from 09:00 to 17:00',
    schedule: [
      {
        title: 'Breakfast',
        details: 'Full beakfast to help you get ready for an action packed day!',
        time: '08:00',
      },
      {
        time: '09:00',
        details: 'Raquel Vélez',
        title: 'The Beauty of Bad Code'
      },
      {
        time: '09:45',
        details: 'John Feminella',
        title: 'Time and Time Again: Fixing Dates in JS'
      },
      {
        time: '10:30',
        title: 'Coffee/tea break',
        details: ''
      },
      {
        time: '11:00',
        details: 'Franziska Hinkelmann',
        title: 'JavaScript engines - how do they even?'
      },
      {
        time: '11:45',
        details: 'Benedikt Meurer',
        title: 'ESnext Performance - Why bother?'
      },
      {
        time: '12:30',
        title: 'Lunch',
        details: ''
      },
      {
        time: '13:30',
        details: 'Jan Krutisch',
        title: 'Hello? Yes, this is Synth - Making Hardware better with the Web'
      },
      {
        time: '14:15',
        details: 'Jana Beck',
        title: 'JavaScript therapy',
      },
      {
        time: '15:00',
        title: 'Coffee/tea break'
      },
      {
        time: '15:30',
        details: 'Matteo Collina',
        title: 'Building a Scalable Pub/Sub system with UpRing'
      },
      {
        time: '16:15',
        details: 'Mariko Kosaka & Suz Hinton',
        title: 'Can You Read Me? Creative Java­Script to Make Computer Science Fun'
      },
      {
        time: '17:00',
        title: 'Group photo',
        details: ''
      }
    ],
  },
};

talks.forEach((talk) => {
  talk.presenterNames = talk.presenters.map(({name}) => name).join(' & ')
})

module.exports = {
  day1,
  day2,
  talks: talks.filter(({workshop}) => !workshop),
  workshops: talks.filter(({workshop}) => workshop),
  days
}

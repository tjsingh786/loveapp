const express = require('express');
const app = express();

// Serve static files from public folder
app.use(express.static('public'));

// ALSO serve img folder directly!
app.use(express.static('.'));

app.set('view engine', 'ejs');

const profiles = [
    {
        id: 1,
        name: 'Tajinder',
        age: '24',
        image: '/img/1.jpeg',
        bio: 'Chole Bhature Enthusiast'
    },
    {
        id: 2,
        name: 'Tejuu',
        age: '23',
        image: '/img/2.jpeg',
        bio: 'Hey Stalker'
    },
    {
        id: 3,
        name: 'Bubuuu',
        age: '25',
        image: '/img/3.jpeg',
        bio: 'dudu ka ashiq'
    },
    {
        id: 4,
        name: 'Darukhor Pati',
        age: '26',
        image: '/img/4.jpeg',
        bio: 'Darwaja Khol'
    }
];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/app', (req, res) => {
    res.render('bumble-exact', { profiles });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`💕 Bumble running at http://localhost:${PORT}`);
    console.log(`Login page: http://localhost:${PORT}/login`);
    console.log('');
    console.log('Credentials:');
    console.log('Username: Jahnavi555');
    console.log('Password: 12345');
});
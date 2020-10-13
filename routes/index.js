const express = require('express');
const app = require('../app'); // This line should actually be "require('../app')" because it will import the app instanve created in app.js
//app.use(express.static(__dirname + 'public')); // The above line of code was implemented in order to make this one work and try to achieve the CSS files, but it still won't

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('homepage.html', { root: 'views' }); // Homepage is the original landing page, assets is contained in /public
});

router.get('/dashboard', (req, res) => {
    res.sendFile('dashboard.html', { root: 'views' }); // Homepage is the original landing page, assets is contained in /public
});

module.exports = router;
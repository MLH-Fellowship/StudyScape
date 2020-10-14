const express = require('express');
const app = require('../app'); 

const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage.html'); 
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard.html'); 
});

module.exports = router;
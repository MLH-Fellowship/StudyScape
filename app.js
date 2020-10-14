const express = require('express');
const routes = require('./routes/index');
const path = require('path');

const app = express();
app.use('/', routes);
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
const express = require('express');
const routes = express.Router();

const Authorize = require('./controllers/Authorize');
const Register = require('./controllers/Register');
const Generate = require('./controllers/Generate');
const Validate = require('./controllers/Validate');

const Auth = require('./middlewares/Auth');
const Refresh = require('./middlewares/Refresh');

const Static = require('./controllers/Static');

// Authentication
routes.post('/authorize', Authorize);
routes.post('/refresh', Refresh, Authorize);
routes.post('/register', Auth, Register);

// Server
routes.get('/generate', Auth, Generate)
routes.post('/validade', Auth, Validate);

// Dashboard
// routes.get('/', Static('dashboard.html'));

module.exports = routes;
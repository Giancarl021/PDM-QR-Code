const express = require('express');
const routes = express.Router();

const Authorize = require('./controllers/Authorize');
const Register = require('./controllers/Register');
const Generate = require('./controllers/Generate');
const Validate = require('./controllers/Validate');

const Auth = require('./middlewares/Auth');
const Refresh = require('./middlewares/Refresh');

const View = require('./services/View');

// Authentication
routes.post('/api/authorize', Authorize);
routes.post('/api/refresh', Refresh, Authorize);
routes.post('/api/register', Auth, Register);

// Server
routes.get('/api/generate/:subject', Auth, Generate);
routes.get('/api/validate/:token', Auth, Validate);

// Dashboard
// routes.get('/', Vire('dashboard.html'));

module.exports = routes;
const express = require('express');
const routes = express.Router();

const Authorize = require('./controllers/Authorize');
const Register = require('./controllers/Register');
const Generate = require('./controllers/Generate');
const Validate = require('./controllers/Validate');
const Subjects = require('./controllers/Subjects');
const Attendance = require('./controllers/Attendance');

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
routes.get('/api/subjects', Auth, Subjects);
routes.get('/api/attendance/:lessonId', Auth, Attendance);

// Dashboard
routes.get('/', View('dashboard'));
routes.get('/login', View('login'));
routes.get('/subject/:id', View('subject'));

module.exports = routes;
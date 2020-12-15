const express = require('express');
const path = require('path');

const static = express.static(path.resolve(__dirname, '..', '..', 'web', 'assets'));

module.exports = static;
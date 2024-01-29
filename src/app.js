
const express = require('express');
const app = express();
const authRouter = require('./Routes/auth');
app.use('api/v1/auth', authRouter);

module.exports = app
import express from 'express' //babel test

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')
const config = require('./db')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const users = require('./routes/user');
const testTest = require('./routes/test')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/hello', indexRouter);
app.use('/users', usersRouter);

 //mongoose connect DataBase
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
        () => {console.log('Database connected')},
        err => {console.log('Not found database' + err)},
    );

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/users', testTest);

app.get('/', function(req, res) {
  res.send('hello');
});

module.exports = app;

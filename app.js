require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const {passport} = require('./models/userModel');
const routes = require('./routes/index-routes');
const app = express();
const {
  PORT = 8000,
  MONGODB_URI = 'mongodb://localhost:27017/cookin'
} = process.env
console.log('SECRET_KEY', process.env.SECRET_KEY)
app.set('view engine', 'ejs'); // <-- this is middleware, place this b4 any routes

//serves static files
app.use(express.static('public'));
app.use(express.urlencoded({  extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

mongoose.connect(MONGODB_URI, () => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
})




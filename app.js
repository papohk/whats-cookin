require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
// const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes/index-routes');
const app = express();

const {
  PORT = 8000,
  MONGODB_URI = 'mongodb://localhost:27017/cookin'
} = process.env

app.set('view engine', 'ejs'); // <-- this is middleware, place this b4 any routes

//serves static files
app.use(express.static('public'))

app.use('/', routes);

mongoose.connect(MONGODB_URI, () => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
})




//http://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 8000

//serves static files
app.use(express.static('public'))
app.set('view engine', 'ejs'); // <-- this is middleware, place this b4 any routes

app.get('/', (req, res) => {
    res.render('pages/index', {})
})
app.get('/', (req, res) => {
    res.render('pages/index', {})
})  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Next step for 4/28/22 - steup the rest of the js file, but we will change "About Us" to "Favorite List"
//added a route for Favorite List
//
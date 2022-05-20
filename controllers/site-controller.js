

module.exports={
    index: (request, response) => {
        // response.send(`This route points to the Home page`);
        response.render('pages/index', {});
    }, // this is the handler function
    ideas: (request, response) => {
        // response.send(`This route points to the Ideas page`);
        response.render('pages/ideas', {});
    },
    favlist: (request, response) => {
        // response.send(`This route points to the Favorites page`);
        response.render('pages/favlist', {});
    },  // this is the handler function
    signup: (request, response) => {
        // response.send(`This route points to the Signup page`);
        response.render('pages/signup', {});
    },
    login: (request, response) => {
        // response.send(`This route points to the Login page`);
        response.render('pages/login', {});
    }
}
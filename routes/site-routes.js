const router = require('express').Router();
const siteController = require('../controllers/site-controller')


// SITE ROUTES
router.get('/', siteController.index)

router.get('/favlist', siteController.favlist)

router.get('/signup', siteController.signup)

router.get('/login', siteController.login)

router.get('/logout', siteController.logout)

router.get('/auth/google', siteController.google_get)


module.exports = router;


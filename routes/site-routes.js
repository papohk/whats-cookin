const router=require("express").Router()
const siteController=require("../controllers/site-controller")

router.get('/', siteController.index)

router.get('/favlist', siteController.favlist)

router.get('/signup', siteController.signup)

router.get('/login', siteController.login)

module.exports=router;
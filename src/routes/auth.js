const {Router}=require('express');
const {check}=require('express-validator')
const {logIn,singUp}=require('../controllers/auth')
const router=Router()

router.get('/login',logIn);

router.get('/signup',singUp)







module.exports=router
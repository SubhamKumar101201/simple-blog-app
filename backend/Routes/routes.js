const express = require('express')
const { loginCon } = require('../Controller/login')
const { signupCon } = require('../Controller/signup')
const { uploadCon,check } = require('../Controller/createPost')
const router = express.Router()

router.post('/',loginCon)
router.post('/signup',signupCon)
router.post('/post/upload',uploadCon)
router.get('/test',check)


module.exports = router;
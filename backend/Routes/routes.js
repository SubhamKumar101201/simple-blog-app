const express = require('express')
const { loginCon } = require('../Controller/login')
const { signupCon } = require('../Controller/signup')
const { uploadCon } = require('../Controller/createPost')
const router = express.Router()

router.post('/',loginCon)
router.post('/signup',signupCon)
router.post('/post/upload',uploadCon)


module.exports = router;
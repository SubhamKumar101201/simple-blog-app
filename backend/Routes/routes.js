const express = require('express')
const { loginCon } = require('../Controller/login')
const { signupCon } = require('../Controller/signup')
const router = express.Router()

router.post('/',loginCon)
router.post('/signup',signupCon)


module.exports = router;
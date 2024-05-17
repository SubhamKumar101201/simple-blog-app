const express = require('express')
const { loginCon } = require('../Controller/login')
const { signupCon } = require('../Controller/signup')
const { createPost } = require('../Controller/createPost')
const { getPosts } = require('../Controller/getPosts')
const router = express.Router()

router.post('/',loginCon)
router.post('/signup',signupCon)
router.post('/create/post',createPost)
router.post('/posts',getPosts)


module.exports = router;
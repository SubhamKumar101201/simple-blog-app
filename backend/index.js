const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./Routes/routes');

const app = express()

const port = process.env.PORT || 9000

app.use(bodyParser.json())

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.use(router)
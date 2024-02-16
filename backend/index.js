const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config();
var bodyParser = require('body-parser');
const router = require('./Routes/routes');


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 9000

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.use(router)
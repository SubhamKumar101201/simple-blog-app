const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const connection = require('./DB/mysql_db');
const bodyParser = require('body-parser');

const app = express()

const port = process.env.PORT || 9000

app.use(bodyParser.json())

app.use(cors());



app.post('/', (req, res) => {
  const { email, password } = req.body;

  try {
    connection.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
      (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Internal Server Error');
        } else {
          if (results.length > 0) {
            res.json({ response: 'exist', data: results });
          } else {
            res.json('notexist');
          }
        }
      }
    );
  } catch (e) {
    res.json('failed')
  }
});


app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const checkEmail = await connection.query(`SELECT * FROM users WHERE email = ?`, [email]);

      if (checkEmail.length > 0) {
        res.json('exists');
      } else {
        const insertUser = await connection.query(
          `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
          [name, email, password], (err, results) => {
            if (err) {
              res.json('failed to resgister')
            } else {
              res.json('resgistered')
            }
          }
        )
      }
    } catch (e) {
      res.json('failed')
    }
  } else {
    res.json('missing')
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
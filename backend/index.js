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


 
app.get('/',(req,res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.json(results);
        }
    })
})

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(insertQuery, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error executing insert query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send('User added successfully');
      }
    });
  });

app.listen( port , () => {
    console.log(`Server is running on port ${port}`)
})
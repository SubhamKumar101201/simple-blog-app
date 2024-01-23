const connection = require('../DB/mysql_db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.loginCon = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email],
                (err, results) => {

                    if (err) return res.status(500).json({ msg: 'Internal Server Error' });

                    if (!results.length > 0) return res.status(401).json({ msg: 'User not registered' });

                    bcrypt.compare(password, results[0].password, function (err, result) {
                        if (err) return res.status(500).json({ msg: 'Internal Server Error' });

                        if (!result) return res.status(401).json({ msg: 'Invalid Credentials' });

                        const userPayload = { id: results[0].id, name: results[0].name, email: results[0].email, password: results[0].email };

                        const accessToken = jwt.sign(userPayload, process.env.SECRET_KEY, { expiresIn: '15m' })

                        const refreshToken = jwt.sign(userPayload, process.env.SECRET_KEY)

                        connection.query('INSERT INTO tokens (token) VALUES (?)', [refreshToken], (err, result) => {
                            if (err) {
                                console.log(err);
                                return res.status(500).json({ msg: 'Error while singup the user' });
                            }
                        })


                        return res.status(200).json({ msg: 'Authorized', data: results[0], tokensObject: { accessToken: accessToken, refreshToken: refreshToken } })
                    })
                }
            );
        } catch (e) {
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    } else {
        return res.status(422).json({ msg: "Missing required field(s)" })
    }
}
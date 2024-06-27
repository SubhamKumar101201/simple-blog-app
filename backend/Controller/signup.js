const connection = require('../DB/pgsql_db.js')
const bcrypt = require('bcrypt')

exports.signupCon = async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
            await connection.query('SELECT * FROM users WHERE email = ?', [email],
                (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        return res.status(500).json({ msg: 'Internal Server Error' });
                    } else {
                        if (results.length > 0) {
                            return res.status(409).json({ msg: 'Email already exist', data: results });
                        } else {
                            bcrypt.hash(password,10,(err,hashPassword) => {
                                if (err) {
                                    console.log(err);
                                    return res.status(500).json({ msg: 'Internal Server Error' });
                                } else {
                                    connection.query('INSERT INTO users (name , email , password) VALUES (?,?,?)', [name, email, hashPassword], (err, result) => {
                                        if (err) {
                                            console.log(err);
                                            return res.status(500).json({ msg: 'Error while singup the user' });
                                        } else if (result) {
                                            return res.status(200).json({ msg: 'User singup successfully' });
                                        }
                                    })
                                }
                            })
                            
                        }
                    }
                })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    } else {
        return res.status(422).json({ msg: "Missing required field(s)" })
    }
}
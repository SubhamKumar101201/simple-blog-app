const connection = require('../DB/mysql_db');
const bcrypt = require('bcrypt')

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

                        return res.status(200).json({ msg: 'Authorized', data: results })
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
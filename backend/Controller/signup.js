const connection = require('../DB/mysql_db');

exports.signupCon = async (req, res) => {
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
}
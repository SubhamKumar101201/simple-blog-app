const connection = require('../DB/mysql_db');

exports.loginCon = async (req, res) => {
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
}
const connection = require('../DB/mysql_db')

exports.getPosts = async (req, res) => {
    const { category }  = req.body;
    try {
        if (category) {
            connection.query('SELECT * FROM posts WHERE category = ?', [category.toLowerCase()],
                (err, result) => {
                    if (err) {
                        return res.status(404).json({ msg: err });
                    } else {
                        return res.status(200).json({ msg: result });
                    }
                }
            );
        } else if (category === '') {
            connection.query('SELECT * FROM posts', (err, result) => {
                if (err) {
                    return res.status(404).json({ msg: err });
                } else {
                    return res.status(200).json({ msg: result });
                }
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'Internal Server Error', error: e });
    }
}

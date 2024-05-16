const connection = require('../DB/mysql_db')

exports.getPosts = async (req, res) => {
    try {
        connection.query('SELECT * FROM posts',(err,result) => {
            if(err) {
                return res.status(404).json({ msg: err });
            } else {
                return res.status(200).json({ msg: result });
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'Internal Server Error' , error: e });
    }
}

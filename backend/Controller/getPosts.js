const connection = require('../DB/pgsql_db.js')

exports.getPosts = async (req, res) => {
    try {
        connection.query('SELECT * FROM posts',(err,result) => {
        if (err) {
            return res.status(404).json({error : err});
        }
            return res.status(200).json({ posts : result })
       });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'Internal Server Error', error: e });
    }
}

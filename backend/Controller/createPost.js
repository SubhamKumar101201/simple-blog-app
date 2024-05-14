const connection = require('../DB/mysql_db')

exports.createPost = async (req, res) => {
    const { userId , category , imgUrl , title , description } = req.body;
    console.log(userId , category , imgUrl , title , description)
    if ( userId && category && title && description ) {
        try {
            connection.query('INSERT INTO posts ( user_id , category , image_url , title , description ) VALUES (?,?,?,?,?)', [userId, category, imgUrl, title, description], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ msg: 'Error while publish the post' });
                } else if (result) {
                    return res.status(200).json({ msg: 'Post publish successfully' });
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

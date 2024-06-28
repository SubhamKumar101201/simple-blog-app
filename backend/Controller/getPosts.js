const Post = require('../Model/post.model.js');

exports.getPosts = async (_, res) => {
    try {
    //     connection.query('SELECT * FROM posts',(err,result) => {
    //     if (err) {
    //         return res.status(404).json({error : err});
    //     }
    //         return res.status(200).json({ posts : result })
    //    });
    const posts = await Post.findAll();
    if ( !posts ) {
        return res.status(404).json({ msg: 'Error while fetching data' });
    }

    return res.status(200).json({ posts : posts })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ msg: 'Internal Server Error', error: e });
    }
}

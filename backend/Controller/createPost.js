const connection = require('../DB/mysql_db')

exports.uploadCon = async (req, res) => {
    const file = req.file
    console.log(req.file);
    console.log(req);
    res.json({msg:file})
}

exports.check = async (req,res) => {
    res.send({msg:req.hostname})
}
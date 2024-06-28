const User = require('../Model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.loginCon = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) return res.status(401).json({ msg: 'User not registered' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ msg: 'Invalid Credentials' });

            const userPayload = { id: user.id, name: user.name, email: user.email };
            const accessToken = jwt.sign(userPayload, process.env.SECRET_KEY);

            return res.status(200).json({ msg: 'Authorized', data: user, tokensObject: { accessToken } });
        } catch (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    } else {
        return res.status(422).json({ msg: "Missing required field(s)" });
    }
};

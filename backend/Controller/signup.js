const User = require('../Model/user.model.js');
const bcrypt = require('bcrypt');

exports.signupCon = async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({ msg: 'Email already exists', data: existingUser });
            }

            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, password: hashPassword });

            return res.status(200).json({ msg: 'User signed up successfully', data: newUser });
        } catch (err) {
            console.error('Error during signup:', err);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    } else {
        return res.status(422).json({ msg: "Missing required field(s)" });
    }
};

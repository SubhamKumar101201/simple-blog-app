const { DataTypes } = require('sequelize');
const sequelize = require('../DB/pgsql_db.js');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true, // This is true by default, can be omitted
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

module.exports = User;

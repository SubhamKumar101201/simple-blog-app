const { DataTypes } = require('sequelize');
const sequelize = require('../DB/pgsql_db.js');
const User = require('../Model/user.model.js')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true, // This is true by default, can be omitted
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hooks: {
        beforeValidate: (post, _) => {
            if (post.category) {
                post.category = post.category.toLowerCase();
            }
        }
    }
});

User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Post;

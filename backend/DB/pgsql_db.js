// database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.PG_DB_URL,  
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false,
    }
);

sequelize.sync().then(() => {
    console.log("Database synced successfully");
}).catch((error) => {
    console.log("Error syncing database:", error);
});

module.exports = sequelize;

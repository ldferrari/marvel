// https://github.com/andresjesse/api-nodejs-sample/blob/main/src/database/sequelize.js
// repositorio github onde pesquisei para conseguir usar o sequelize com o postgresSQL

const { Sequelize } = require("sequelize");

console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//check connection (optional)
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
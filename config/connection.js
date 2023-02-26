require('dotenv').config();

const Sequelize = require('sequelize');

// Connection to db for Heroku and local, dialect needs to be explicity supplied
const sequelize = process.env
  ? new Sequelize(process.env)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          port:3001
        },
        
      }
    );

module.exports = sequelize;
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Koneksi ke database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', 
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;

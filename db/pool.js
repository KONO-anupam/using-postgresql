const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });
const { Pool } = require('pg')

module.exports = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

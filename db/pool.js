const {Pool} = require('pg')
require('dotenv').config()
const { connectionString } = require('pg/lib/defaults')

module.exports = new pool({
  connectionString = process.env.DATABASE_URL
})

path = require('path')
require('dotenv').config({path: path.join(__dirname,'../config/.env') })
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS usernames(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
  );

  INSERT INTO USERNAMES (username)
  VALUES 
    ('Bryan'),
    ('kunu'),
    ('odin');
  
`;

async function main(){

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
}

main()

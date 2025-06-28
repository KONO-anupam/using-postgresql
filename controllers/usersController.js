const {validationResult} = require('express-validator');
const db = require('../db/query.js');

async function getAllUsernames  (req, res){
const usernames = await db.getAllUsernames()
res.send("Usernames:"+usernames.map(user => user.username).join(", "))
}

async function getNewUsername  (req,res) {
  const path = require('path');
  res.sendFile(path.join(__dirname, '..views/new.html'))
}


async function postNewUsername  (req,res) {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).send('Invalid input:'+JSON.stringify(errors.array()));
  }

  const username = req.body.username; 
  console.log("username to be saved", username);
  await db.insertUsername(username);
  res.redirect('/');
}

module.exports = {
   getAllUsernames,
  getNewUsername,
  postNewUsername  
};


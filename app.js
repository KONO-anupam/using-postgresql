express = require('express');
require('dotenv').config()
usersRouter = require('./routes/usersRouter.js')
app = express();

app.use(express.urlencoded({extened:true}));
app.use('/',usersRouter);

const port = process.env.PORT|| 3000;

app.listen(port,() => {console.log(`express app listening on ${port}`)})


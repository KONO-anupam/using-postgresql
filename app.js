express = require('express');
new = require('./routes/usersRouter')
app = express();

app.use(express.urlencoded({extened:true}));
app.use('/',usersRouter);

const port = process.env.port|| 3000;

app.listen(port,() = > console.log(`express app listening on ${port}`))


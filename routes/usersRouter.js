const {Router} = require('express');

usersController = require('../controllers/usersController.js')
usersRouter = Router();

usersRouter.get('/', usersController.getAllUsernames);
usersRouter.get('/new', usersController.getNewUsername);
usersRouter.post('/new', usersController.postNewUsername);


module.exports = usersRouter;

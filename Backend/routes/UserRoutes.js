const express = require('express');
const router = express.Router();
const UserController = require("../controller/UserController");


router.get('/getusers', UserController.getRegisteredUsers);
router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);



module.exports = router;
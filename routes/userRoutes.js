const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


// User Section
router.post('/', UserController.createUser);
router.get('/', UserController.getUsers)
router.get('/:id',UserController.getUserByID)
router.delete('/:id',UserController.deleteUserByID)

module.exports = router;

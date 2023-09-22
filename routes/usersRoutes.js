const express = require('express');
const { getUsers, getSingleUser, createNewUser, updateUserProfile, deletingUser } = require('../controllers/userController');


const router = express.Router();

// Get all users
router.get('/users', getUsers);

//get userby id
router.get('/user/:id', getSingleUser);

// creaate new user
router.post('/user', createNewUser);

// update a user profile
router.put('/user/:id', updateUserProfile);

// delete a user
router.delete('/user/:id', deletingUser);


module.exports = router;
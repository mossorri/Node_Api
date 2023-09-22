const User = require("../models/userModels");
const asyncHandler = require('express-async-handler')

// Getting all users in the database
const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

// get a single user by id
const getSingleUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

// create a New User
const createNewUser = asyncHandler(async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

// update a user profile
const updateUserProfile = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const userUpdate = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user info in database
        if(!userUpdate){
            res.status(404);
            throw new Error(`cannot find any user with that ID ${id}`);
        }
        const updatedUserProfile = await User.findById(id);
        res.status(200).json(updatedUserProfile);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

// delete a user from database
const deletingUser = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            res.status(404);
            throw new Error(`cannot find any user with that ID ${id}`);
        }
        res.status(200).json(deletedUser);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


module.exports = {
    getUsers,
    getSingleUser,
    createNewUser,
    updateUserProfile,
    deletingUser
};

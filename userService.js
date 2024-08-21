// src/userService.js
const { findUserById, saveUser } = require('./database');

function getUser(id) {
    return findUserById(id);
}

function createUser(user) {
    if (!user.name || !user.email) {
        throw new Error('Invalid user data');
    }
    return saveUser(user);
}

module.exports = { getUser, createUser };

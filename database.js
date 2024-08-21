// src/database.js
const users = [];

function findUserById(id) {
    return users.find(user => user.id === id);
}

function saveUser(user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
}

module.exports = { findUserById, saveUser };

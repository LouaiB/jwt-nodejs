const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    roles: {
        type: [],
        required: true,
        default: []
    },
    refreshToken: {
        type: String,
        default: null
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
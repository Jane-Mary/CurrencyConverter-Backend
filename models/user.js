const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    fullname: {type: String, required: true},
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

const User = model('user' , userSchema);

module.exports = User;
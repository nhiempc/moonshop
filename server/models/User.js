const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    address: String,
    email: String,
    username: String,
    password: String,
    name: {
        firstname: String,
        lastname: String
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    phone: String
});

module.exports = mongoose.model('User', UserSchema);
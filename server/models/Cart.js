const mongoose = require('mongoose');

const ProductInCartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number
});

const CartSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["0","1"]
    },
    products: [ProductInCartSchema]
});

module.exports = mongoose.model('Cart', CartSchema);
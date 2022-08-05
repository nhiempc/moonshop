const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    brandID: {
        type: String,
        ref: 'Brand'
    },
    categoryID: {
        type: String,
        ref: 'Category'
    },
    rating: {
        rate: Number,
        count: Number
    }
});

module.exports = mongoose.model('Product', ProductSchema);
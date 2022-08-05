const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    categoryIds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const BrandSchema = new mongoose.Schema({
    title: String,
    categoryIds: [String]
});

module.exports = mongoose.model('Brand', BrandSchema);
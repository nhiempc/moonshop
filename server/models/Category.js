const mongoose = require('mongoose');

const Brand = new mongoose.Schema({
    brandIds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }
})

const CategorySchema = new mongoose.Schema({
    title: String,
    brandIds: [String]
});

module.exports = mongoose.model('Category', CategorySchema);
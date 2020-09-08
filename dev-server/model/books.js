const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
            title: {type: String, required: true},
            author: {type: String, required: true},
            genre: {type: String, required: true},
            popular: {type: Number, required: true},
            price: {type: Number, required: true},
            coverImage: {type: String, required: true}
    },
    {timestamps: true},
    {versionKey: false}
)

module.exports = mongoose.model('books', BookSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});
module.exports = mongoose.model('Article', articleSchema);
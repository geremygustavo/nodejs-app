const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date : {
        type: Date,
        default: Date.now
    }
});
console.log('here is')
module.exports = mongoose.model('Posts', PostSchema);
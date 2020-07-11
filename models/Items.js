const mongoose = require('../server/index');


const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('item',ItemSchema);
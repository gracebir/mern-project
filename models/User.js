const mongoose = require('../server/index');


const UserSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    register_date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('user',UserSchema);
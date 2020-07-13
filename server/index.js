const mongoose = require('mongoose');
const config = require('config');


const db = config.get('mongoURI');

mongoose.connect(db,
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true},
    ()=>{
    console.log('yes we are connected now');
});


module.exports = mongoose;
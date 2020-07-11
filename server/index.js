const mongoose = require('mongoose');



mongoose.connect("mongodb://funcoder:Fire1234@mern-shard-00-00.v8ddv.mongodb.net:27017,mern-shard-00-01.v8ddv.mongodb.net:27017,mern-shard-00-02.v8ddv.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-ikc4mx-shard-0&authSource=admin&retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
    console.log('yes we are connected now');
});


module.exports = mongoose;
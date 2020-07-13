const express = require('express');
const app = express();
// importing routes
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const path = require('path');


app.use(express.json());

app.use('/api/items',items);
app.use('/api/users',users);
app.use('/api/auth',auth);


// Serve static assets if we're in production
if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(` Server start on port ${port}...`))
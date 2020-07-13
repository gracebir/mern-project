const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api/items');
const path = require('path');


app.use(bodyParser.json());

app.use('/api/items',items);


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
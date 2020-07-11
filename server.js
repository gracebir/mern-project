const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api/items')

app.use(bodyParser.json());

app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(` Server start on port ${port}...`))
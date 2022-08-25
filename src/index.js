const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})) 

require('./controllers/carController')(app);
require('./controllers/motoristController')(app);
require('./controllers/useOfCarController')(app);
app.listen(3000);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apicontroleautomoveis');
mongoose.Promise = global.Promise;

 module.exports = mongoose;
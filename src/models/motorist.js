const mongoose = require('../database');


const MotoristSchema = new mongoose.Schema({
    
    motorist:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});


const Motorist = mongoose.model('Motorist', MotoristSchema);

module.exports = Motorist;
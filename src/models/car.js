const mongoose = require('../database');


const CarSchema = new mongoose.Schema({
    
    licencePlateCar:{
        type: String,
        required: true,
        unique: true,
    },

    modelCar:{
        type: String,
        required: true,
    },

    colorCar:{
        type: String,
        required: true,
    },


    createdAt:{
        type: Date,
        default: Date.now,
    },

});


const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
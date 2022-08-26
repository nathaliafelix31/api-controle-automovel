const mongoose = require('../database');


const UseOfCarSchema = new mongoose.Schema({
    
    startDateOfUse:{
        type: Date,
        required: true,
    },
    
    EndOfUseDate:{
        type: Date,
    },
    
    ReasonForUse:{
        type: String,
        required: true,
    },

    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,

    },

    motorist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Motorist',
        required: true,

    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

});


const UseOfCar = mongoose.model('UseOfCar', UseOfCarSchema);

module.exports = UseOfCar;
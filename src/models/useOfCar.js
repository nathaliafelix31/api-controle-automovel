const mongoose = require('../database');


const UseOfCarSchema = new mongoose.Schema({
    
    startDateOfUse:{
        type: Date,
        required: true,
    },
    
    EndOfUseDate:{
        type: Date,
        required: true,
    },
    motoristUsed:{
        type: String,
        required: true,
    },

    usedCar:{
        type: String,
        required: true,
    },
    
    ReasonForUse:{
        type: String,
        required: true,
    },

    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
    },

    motorist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Motorist',
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

});


const UseOfCar = mongoose.model('UseOfCar', UseOfCarSchema);

module.exports = UseOfCar;
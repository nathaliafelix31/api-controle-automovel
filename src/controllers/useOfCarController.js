const express = require('express');

const UseOfCar = require('../models/UseOfCar');

const router = express.Router();


router.post('/registerUseOfCar', async (req, res)=>{

    try{

        const useOfCars = await UseOfCar.find({ $or:[ {motorist: req.body?.motorist || '' }, { car: req.body?.car || '' } ], $and:[{EndOfUseDate: null}]});


        if(useOfCars.length > 0) return res.send({error: 'Car is already being used'});

        const newUseOfCar = await UseOfCar.create(req.body);


        return res.send({newUseOfCar});
      
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});


router.get('/', async (req, res) =>{ 
    try{
        const useOfCars = await UseOfCar.find().populate(['motorist', 'car']);

        return res.send({useOfCars});

    }catch (err){
        return res.status(400).send({error: 'Error loading useOfCars'});
    }
});

router.put('/filter',async (req, res) =>{ 
    try{
        const{EndOfUseDate} = req.body;

        const useOfCar = await UseOfCar.findOne( {$and: [{motorist: req.body.motorist}, { car: req.body.car}, {EndOfUseDate: null}]});

        if(useOfCar === null) return res.send({error: 'Car already finished or not used!'});

        const finishUseOfCar = await UseOfCar.findByIdAndUpdate(useOfCar._id,{ 
            EndOfUseDate,
        }, {new: true});

        await finishUseOfCar.save();

        return res.send({finishUseOfCar});
    }catch (err){
        return res.status(400).send({error: 'Error finish useOfCar'});
    }
});


module.exports = app => app.use('/useOfCar', router)
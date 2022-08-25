const express = require('express');

const Car= require('../models/Car');

const router = express.Router();

router.post('/registerCar', async (req, res)=>{

    const { licencePlateCar } = req.body;
    try{
        if ( await Car.findOne({ licencePlateCar }))
        return res.status(400).send({ error: 'User already exists'});
        
        const car = await Car.create(req.body);

        return res.send({car});
      
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});


router.get('/', async (req, res) =>{ 
    try{
        const cars = await Car.find();

        return res.send({cars});

    }catch (err){
        return res.status(400).send({error: 'Error loading cars'});
    }
});

router.get('/:carId',async (req, res) =>{ 
    try{
        const car = await Car.findOne({_id:req.params.carId});

        return res.send({car});

    }catch (err){
        return res.status(400).send({error: 'Error loading car'});
    }
});


router.put('/:carId',async (req, res) =>{ 
    try{
        
        const { licensePlateCar } = req.body;
        const { modelCar } = req.body;
        const { colorCar } = req.body;
        

        const newCar = await Car.findByIdAndUpdate(req.params.carId,{ 
            licensePlateCar,
            modelCar,
            colorCar,

        }, {new: true});

        await newCar.save();

        return res.send({newCar});
    }catch (err){
        return res.status(400).send({error: err.message});
    }
});

router.delete('/:carId',async (req, res) =>{ 
    try{
        await Car.findByIdAndRemove(req.params.carId);

        return res.send({success: 'Car Deleted Successfully'});
    }catch (err){
        return res.status(400).send({error: 'Error deleting car'});
    }
});


module.exports = app => app.use('/car', router)
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

module.exports = app => app.use('/car', router)
const express = require('express');

const UseOfCar = require('../models/UseOfCar');

const router = express.Router();


router.post('/registerUseOfCar', async (req, res)=>{


    try{
      
        const useOfCar = await UseOfCar.create(req.body);

        return res.send({useOfCar});
      
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});

module.exports = app => app.use('/useOfCar', router)
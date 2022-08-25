const express = require('express');

const Motorist = require('../models/Motorist');

const router = express.Router();

router.post('/registerMotorist', async (req, res)=>{


    try{
      
        const motorist = await Motorist.create(req.body);

        return res.send({motorist});
      
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});


module.exports = app => app.use('/motorist', router)
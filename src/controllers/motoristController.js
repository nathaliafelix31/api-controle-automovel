const express = require('express');

const Motorist = require('../models/Motorist');

const router = express.Router();

router.post('/registerMotorist', async (req, res)=>{ //create


    try{
      
        const motorist = await Motorist.create(req.body);

        return res.send({motorist});
      
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});

router.get('/', async (req, res) =>{ 
    try{
        const motorists = await Motorist.find();

        return res.send({motorists});

    }catch (err){
        return res.status(400).send({error: 'Error loading motorists'});
    }
});

router.get('/:motoristId',async (req, res) =>{ 
    try{
        const motorist = await Motorist.findOne({_id:req.params.motoristId});

        return res.send({motorist});

    }catch (err){
        return res.status(400).send({error: 'Error loading motorist'});
    }
});


router.put('/:motoristId',async (req, res) =>{ 
    try{
        const { motorist } = req.body;

        const newMotorist = await Motorist.findByIdAndUpdate(req.params.motoristId,{ 
            motorist
        }, {new: true});

        await newMotorist.save();

        return res.send({motorist});
    }catch (err){
        return res.status(400).send({error: 'Error updating motorist'});
    }
});

router.delete('/:motoristId',async (req, res) =>{ 
    try{
        await Motorist.findByIdAndRemove(req.params.motoristId);

        return res.send({success: 'Motorist Deleted Successfully'});
    }catch (err){
        return res.status(400).send({error: 'Error deleting motorist'});
    }
});

module.exports = app => app.use('/motorist', router)
const express = require('express');
const pokemonRouter = express.Router();
const Pokemon = require('../models/poke')


// INDEX
pokemonRouter.get('/', async (req, res) => {
    try {
        res.json(await Pokemon.find({}));
    } catch (error) {
        res.status(400).json(error)
    }
});


// DESTROY
pokemonRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Pokemon.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})
// UPDATE
pokemonRouter.put('/:id', async (req, res) => {
    try {
        res.json(await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
        res.status(400).json(error)
    }
})
// CREATE 
pokemonRouter.post('/', async (req, res) => {
    try {
        res.json(await Pokemon.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = pokemonRouter
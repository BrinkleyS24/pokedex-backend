const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema ({
    name: String,
        img: String,
        type: [String],
        stats: {
            hp: Number,
            attack: Number,
            defense: Number,
            spattack: Number,
            spdefense: Number,
            speed: Number
        }
}, {timestamps: true})

const Pokemon = mongoose.model('Pokemon', pokeSchema)

module.exports = Pokemon
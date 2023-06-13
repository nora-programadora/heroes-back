const mongoose = require('mongoose')
const { Schema } = mongoose

const heroSchema = new Schema ({ 
    name: String,
    description: String,
    favorite: Boolean
},{
    versionKey: false,
    timestamps: true
})

const HeroModel = mongoose.model('characters', heroSchema)

module.exports = HeroModel
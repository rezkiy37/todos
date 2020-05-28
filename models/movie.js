const { model, Schema } = require('mongoose')

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = model('Movie', movieSchema)
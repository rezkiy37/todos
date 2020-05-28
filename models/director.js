const { model, Schema } = require('mongoose')

const directorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = model('Director', directorSchema)
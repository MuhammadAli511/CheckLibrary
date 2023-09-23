const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    permissions: [{
        type: String,
        required: true,
    }],
    scope: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Roles', roleSchema)
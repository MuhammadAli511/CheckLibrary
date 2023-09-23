const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    reset_token: {
        type: String,
    },
    dob: {
        type: Date,
    },
    timeZone: {
        type: String,
    },
    position: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    website: {
        type: String,
    },
    bio: {
        type: String,
    },
    accountStatus: {
        type: String,
    },
    selectedWorkspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workspaces'
    },
})
module.exports = mongoose.model('Users',userSchema)
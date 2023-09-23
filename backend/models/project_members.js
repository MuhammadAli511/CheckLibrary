const mongoose = require('mongoose')

const projectMembersSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'roles',
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'projects',
    },
})

module.exports = mongoose.model('ProjectMembers', projectMembersSchema)
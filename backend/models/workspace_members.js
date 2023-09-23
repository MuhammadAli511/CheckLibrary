const mongoose = require('mongoose')

const workspaceMembersSchema = mongoose.Schema({
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
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'workspaces',
    },
})

module.exports = mongoose.model('workspaceMembers', workspaceMembersSchema)
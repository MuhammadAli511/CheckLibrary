const Workspace = require('../models/workspaces');

module.exports.getWorkspaceById = async (workspaceId) => {
    return await Workspace.findById(workspaceId);
}

module.exports.getWorkspaceNames = async (userId) => {
    return await Workspace.find({ ownerId: userId }).select('name');
}
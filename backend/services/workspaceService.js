const Workspace = require('../models/workspaces');

module.exports.getWorkspaceById = async (workspaceId) => {
    return await Workspace.findById(workspaceId);
}
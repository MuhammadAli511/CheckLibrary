const User = require('../models/users');

module.exports.setSelectedWorkspace = async (userId, workspaceId) => {
    await User.findOneAndUpdate({ _id: userId }, { selectedWorkspace: workspaceId });
}

module.exports.getUserById = async (userId) => {
    return await User.findById(userId);
}

module.exports.updateAccountStatus = async (userId, status) => {
    await User.findOneAndUpdate({ _id: userId }, { accountStatus: status });
}
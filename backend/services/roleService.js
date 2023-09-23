const Roles = require('../models/roles')

module.exports.getRoleId = async (roleName) => {
    const roleId = await Roles.findOne({ name: roleName }).select('_id');
    return roleId;
}
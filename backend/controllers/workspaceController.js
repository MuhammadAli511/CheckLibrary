const Workspace = require('../models/workspaces')
const WorkspaceMembers = require('../models/workspace_members')
const userService = require('../services/userService')
const roleService = require('../services/roleService')
const workspaceService = require('../services/workspaceService')

module.exports.workspaceOnboarding = async (req, res) => {
    try {
        const { workspaceName } = req.body;
        const userId = req.user_id;

        if (!workspaceName || !userId) {
            return res.status(400).json({ error: "Required fields are missing" });
        }

        const workspace = await Workspace.findOne({ name: workspaceName, ownerId: userId });
        if (workspace) {
            const data = {
                status: 400,
                message: 'Error: Workspace already exists'
            }
            return res.status(400).json(data);
        }

        const newWorkspace = await Workspace.create({
            name: workspaceName,
            ownerId: userId
        });


        const ownerRoleId = await roleService.getRoleId("Owner");

        await WorkspaceMembers.create({
            workspaceId: newWorkspace._id,
            userId: userId,
            roleId: ownerRoleId._id
        });

        await userService.setSelectedWorkspace(userId, newWorkspace._id);

        const data = {
            status: 200,
            message: 'Workspace created successfully',
            workspace: newWorkspace,
        }
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

module.exports.updateTheme = async (req, res) => {
    const { theme } = await req.body
    const user = await userService.getUserById(req.user_id)
    const updatedWorkspace = await Workspace.findByIdAndUpdate(user.selectedWorkspace, { selectedTheme: theme }, { new: true })
    const data = {
        status: 200,
        message: 'Theme updated successfully',
        workspace: updatedWorkspace
    }
    res.status(200).send(data)
}

module.exports.updateSingleColor = async (req, res) => {
    const { property, color, theme } = await req.body
    
    const user = await userService.getUserById(req.user_id)
    const workspace = await workspaceService.getWorkspaceById(user.selectedWorkspace)
    if (theme === 'light') {
        workspace.lightColorScheme[property] = color
        workspace.markModified('lightColorScheme');
    } else {
        workspace.darkColorScheme[property] = color
        workspace.markModified('darkColorScheme');
    }
    const updatedWorkspace = await workspace.save()
    const data = {
        status: 200,
        message: 'Color updated successfully',
        workspace: updatedWorkspace
    }
    res.status(200).send(data)
}

module.exports.updateDateTimeValues = async (req, res) => {
    const { weekStartOn, dateFormat, timeFormat } = await req.body

    const user = await userService.getUserById(req.user_id)
    const updatedWorkspace = await Workspace.findByIdAndUpdate(user.selectedWorkspace, { weekStartOn, dateFormat, timeFormat }, { new: true })
    const data = {
        status: 200,
        message: 'Date and Time updated successfully',
        workspace: updatedWorkspace
    }
    res.status(200).send(data)
}
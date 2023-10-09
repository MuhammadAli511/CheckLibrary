const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const Token = require('../models/tokens')
const utility = require('../utilities')
const workspaceService = require('../services/workspaceService')
const crypto = require('crypto');

async function generateToken(email, objectId) {
    const token = jwt.sign(
        {
            email,
            objectId
        },
        process.env.JWT_SECRET,
        {
            algorithm: 'HS256'
        }
    );
    return token;
}


async function stripUser(user) {
    const strippedUser = user.toObject ? user.toObject() : user;
    
    if (strippedUser.password) {
        strippedUser.password = null;
        strippedUser.accountType = "email";
    } else {
        strippedUser.accountType = "google";
    }
    
    return strippedUser;
}


module.exports.googleSignup = async (req, res) => {
    const { firstName, lastName, email, timeZone, accountStatus } = await req.body
    if (!firstName || !lastName || !email || !timeZone) {
        const data = {
            status: 500,
            message: 'Please fill all fields'
        }
        res.status(500).send(data)
        return
    }
    const userExists = await User.findOne({ email })

    if (userExists) {
        const updateUser = await User.findOneAndUpdate({ email }, { firstName, lastName, timeZone })
        const strippedUser = await stripUser(updateUser);
        const token = await generateToken(email, updateUser._id)
        const workspaceNames = await workspaceService.getWorkspaceNames(updateUser._id)
        if (updateUser) {
            const data = {
                status: 200,
                message: 'Sign in successful',
                user: strippedUser,
                token,
                workspace: await workspaceService.getWorkspaceById(updateUser.selectedWorkspace),
                workspaceNames
            }
            res.status(200).send(data)
            return
        }
        const data = {
            status: 500,
            message: 'Error: User signup failed'
        }
        res.status(500).send(data)
        return
    }

    const user = await User.create({ firstName, lastName, email, timeZone, accountStatus })
    if (user) {
        const token = await generateToken(email, user._id)
        const strippedUser = await stripUser(user);
        const data = {
            status: 200,
            message: 'Sign up successful',
            user: strippedUser,
            token,
            workspace: await workspaceService.getWorkspaceById(user.selectedWorkspace)
        }
        res.status(200).send(data)
        return
    }
    const data = {
        status: 500,
        message: 'Signup failed'
    }
    res.status(500).send(data)
}

module.exports.signup = async (req, res) => {
    const { firstName, lastName, email, password, defaultTimeZoneCode, accountStatus } = await req.body
    if (!firstName || !lastName || !email || !password || !defaultTimeZoneCode) {
        const data = {
            status: 500,
            message: 'Please fill all fields'
        }
        res.status(500).send(data)
        return
    }
    const userExists = await User.findOne({ email })

    if (userExists) {
        const data = {
            status: 500,
            message: 'Email already exists'
        }
        res.status(500).send(data)
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({ firstName, lastName, email, password: hashedPassword, defaultTimeZoneCode, accountStatus })
    const randomToken = crypto.randomBytes(32).toString('hex');
    const emailToken = await new Token({ userId: user._id, token: randomToken }).save()
    const url = `${process.env.FRONTEND_URL}/users/${user._id}/verify/${emailToken.token}`
    await utility.sendVerificationEmail(user, url)
    const token = await generateToken(email, user._id)
    if (user) {
        const data = {
            status: 200,
            message: 'Sign up successful',
            user: await stripUser(user),
            token
        }
        res.status(200).send(data)
        return
    }
    const data = {
        status: 500,
        message: 'Signup failed'
    }
    res.status(500).send(data)
}

module.exports.login = async (req, res) => {
    const { email, password } = await req.body
    if (!email || !password) {
        const data = {
            status: 500,
            message: 'Please fill all fields'
        }
        res.status(500).send(data)
        return
    }

    const user = await User.findOne({ email })
    if (!user) {
        const data = {
            status: 500,
            message: 'No account found with this email'
        }
        res.status(500).send(data)
        return
    }

    if (!user.password) {
        const data = {
            status: 500,
            message: 'No account found with this email'
        }
        res.status(500).send(data)
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        const data = {
            status: 500,
            message: 'Invalid password'
        }
        res.status(500).send(data)
        return
    }

    if (user.accountStatus === 'unverified') {
        const data = {
            status: 500,
            user: await stripUser(user),
            message: 'Please verify your email address'
        }
        res.status(500).send(data)
        return
    }

    const token = await generateToken(email, user._id)
    const workspaceNames = await workspaceService.getWorkspaceNames(user._id)

    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Login successful',
        user: strippedUser,
        token,
        workspace: await workspaceService.getWorkspaceById(user.selectedWorkspace),
        workspaceNames
    }
    res.status(200).send(data)

}

module.exports.SendEmailforPasswordReset = async (req, res) => {
    const { email } = await req.body
    const user = await User.findOne({ email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Error: User does not exist'
        }
        res.status(500).send(data)
        return
    }

    const data = {
        status: 200,
        message: 'Email sent successfully',
    }

    const token = generateToken(email, user._id);

    user.reset_token = token;
    await user.save();

    let RESETPASS_AUTH_USER = process.env.RESETPASS_AUTH_USER;
    let RESETPASS_AUTH_PASS = process.env.RESETPASS_AUTH_PASS;

    // Create a transporter with your Gmail account settings
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: RESETPASS_AUTH_USER,
            pass: RESETPASS_AUTH_PASS,
        },
    });

    // Define your email options
    const mailOptions = {
        from: RESETPASS_AUTH_USER,
        to: email,
        subject: 'Password Reset',
        text: `Click on the following link to reset your password: ${process.env.BASE_URL}/reset-password?token=${token}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    res.status(200).send(data)

}

module.exports.ChangePasswordonReset = async (req, res) => {
    const { new_password, confirm_password, received_token } = await req.body
    const user = await User.findOne({ received_token })
    if (!user) {
        const data = {
            status: 500,
            message: 'Error: Token does not exist'
        }
        res.status(500).send(data)
        return
    }

    

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(new_password, salt)
    const userUpdate = await User.findOneAndUpdate({ received_token }, { password: hashedPassword })
    const data = {
        status: 200,
        message: 'Password Updated successfully!',
        user: await stripUser(userUpdate)
    }
    res.status(200).send(data)

}

module.exports.changePassword = async (req, res) => {
    const {currentPassword, newPassword, confirmPassword} = await req.body
    if (!currentPassword || !newPassword || !confirmPassword) {
        const data = {
            status: 500,
            message: 'Please fill all fields'
        }
        res.status(500).send(data)
        return
    }

    if (newPassword !== confirmPassword) {
        const data = {
            status: 500,
            message: 'Passwords do not match'
        }
        res.status(500).send(data)
        return
    }

    const user = await User.findOne({ email: req.email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password)
    if (!passwordMatch) {
        const data = {
            status: 500,
            message: 'Invalid current password'
        }
        res.status(500).send(data)
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)
    user.password = hashedPassword
    await user.save()
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Password updated successfully',
        user: strippedUser
    }
    res.status(200).send(data)
}

module.exports.updatePersonalInfo = async (req, res) => {
    const { firstName, lastName, dob, timeZone } = await req.body
    const user = await User.findOne({ email: req.email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }
    user.firstName = firstName
    user.lastName = lastName
    user.dob = await utility.convertStringToDate(dob)
    user.timeZone = timeZone
    await user.save()
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Personal Info updated successfully',
        user: strippedUser,
        workspace: await workspaceService.getWorkspaceById(user.selectedWorkspace)
    }
    res.status(200).send(data)
}

module.exports.updateProfile = async (req, res) => {
    const { position, phoneNumber, website, bio } = await req.body
    const user = await User.findOne({ email: req.email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }
    user.position = position
    user.phoneNumber = phoneNumber
    user.website = website
    user.bio = bio
    await user.save()
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Profile updated successfully',
        user: strippedUser,
        workspace: await workspaceService.getWorkspaceById(user.selectedWorkspace)
    }
    res.status(200).send(data)
}


module.exports.verifyUserEmail = async (req, res) => {
    const {userId, emailToken} = await req.body

    const checkToken = await Token.findOne({ userId, token: emailToken })
    if (!checkToken) {
        const data = {
            status: 500,
            message: 'Invalid Token'
        }
        res.status(500).send(data)
    }
    else {
        const user = await User.findOne({ _id: userId })
        user.accountStatus = 'onboarding'
        await user.save()
        const data = {
            status: 200,
            message: 'Email verified successfully'
        }
        res.status(200).send(data)
    }
}
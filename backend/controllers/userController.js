const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Token = require('../models/token')
const utility = require('../utilities')

async function generateToken(email) {
    const token = jwt.sign(
        { email },
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
    const { firstName, lastName, email, timeZone } = await req.body
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
        if (updateUser) {
            const data = {
                status: 200,
                message: 'Sign up successful',
                user: strippedUser
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

    const user = await User.create({ firstName, lastName, email, timeZone })
    if (user) {
        const strippedUser = await stripUser(user);
        const data = {
            status: 200,
            message: 'Sign up successful',
            user: strippedUser
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
    const { firstName, lastName, email, password, defaultTimeZoneCode } = await req.body
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
    const user = await User.create({ firstName, lastName, email, password: hashedPassword, defaultTimeZoneCode })
    const token = await new Token({ userId: user._id, token: await generateToken(email) }).save()
    const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`
    await utility.sendVerificationEmail(user, url)
    if (user) {
        const data = {
            status: 200,
            message: 'Sign up successful',
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

    const token = await generateToken(email)

    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Login successful',
        user: strippedUser,
        token
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

    const token = generateToken(email)

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
        user: stripUser(userUpdate)
    }
    res.status(200).send(data)

}

module.exports.fetchUserDetails = async (req, res) => {
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
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'User fetched successfully',
        user: strippedUser
    }
    res.status(200).send(data)
}

module.exports.updateTheme = async (req, res) => {
    const { theme } = await req.body
    const user = await User.findOne({ email: req.email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }
    user.selectedTheme = theme
    await user.save()
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Theme updated successfully',
        user: strippedUser
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
        user: strippedUser
    }
    res.status(200).send(data)
}

module.exports.updateSingleColor = async (req, res) => {
    const { property, color, theme } = await req.body
    
    const user = await User.findOne({ email: req.email })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }
    if (theme === 'light') {
        user.lightColorScheme[property] = color
        user.markModified('lightColorScheme');
    } else {
        user.darkColorScheme[property] = color
        user.markModified('darkColorScheme');
    }
    await user.save()
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Color updated successfully',
        user: strippedUser
    }
    res.status(200).send(data)
}

module.exports.updateDateTimeValues = async (req, res) => {
    const { weekStartOn, dateFormat, timeFormat } = await req.body

    const user = await User.findOneAndUpdate({ email: req.email }, { weekStartOn: weekStartOn, dateFormat: dateFormat, timeFormat: timeFormat }, { new: true })
    if (!user) {
        const data = {
            status: 500,
            message: 'Internal Server Error'
        }
        res.status(500).send(data)
        return
    }
    const strippedUser = await stripUser(user);
    const data = {
        status: 200,
        message: 'Date and Time updated successfully',
        user: strippedUser
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
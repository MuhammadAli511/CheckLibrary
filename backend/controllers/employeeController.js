const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')
const utility = require('../utilities')

function generateToken(email) {
    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        {
            algorithm: 'HS256'
        }
    );
    return token;
}


module.exports.googleSignup = async (req, res) => {
    const { firstName, lastName, email, timeZone } = await req.body
    if (!firstName || !lastName || !email || !timeZone) {
        const data = {
            status: 400,
            message: 'Error: Please fill all fields'
        }
        res.status(400).send(data)
        return
    }
    const employeeExists = await Employee.findOne({ email })
    role = 'employee'

    if (employeeExists) {
        const updateEmployee = await Employee.findOneAndUpdate({ email }, { firstName, lastName, timeZone, role })
        if (updateEmployee) {
            const data = {
                status: 200,
                message: 'Employee updated successfully'
            }
            res.status(200).send(data)
            return
        }
        const data = {
            status: 400,
            message: 'Error: Employee signup failed'
        }
        res.status(400).send(data)
        return
    }

    const employee = await Employee.create({ firstName, lastName, email, role, timeZone })
    if (employee) {
        const data = {
            status: 200,
            message: 'Employee created successfully',
            token: generateToken(email)
        }
        res.status(200).send(data)
        return
    }
    const data = {
        status: 400,
        message: 'Error: Employee signup failed'
    }
    res.status(400).send(data)
    return
}

module.exports.signup = async (req, res) => {
    const { firstName, lastName, email, password } = await req.body;
    if (!firstName || !lastName || !email || !password) {
        const data = {
            status: 400,
            message: 'Error: Please fill all fields'
        };
        res.status(400).send(data);
        return;
    }

    const employeeExists = await Employee.findOne({ email });

    if (employeeExists) {
        const data = {
            status: 400,
            message: 'Error: Employee already exists'
        };
        res.status(400).send(data);
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const role = 'employee';
    const employee = await Employee.create({ firstName, lastName, email, password: hashedPassword, role });
    if (employee) {
        // Generate a token
        const token = generateToken(email);

        const data = {
            status: 200,
            message: 'Employee created successfully',
            token: token // Include the token in the response
        };
        res.status(200).send(data);
        return;
    }
    const data = {
        status: 400,
        message: 'Error: Employee signup failed'
    };
    res.status(400).send(data);
    return;
};


module.exports.login = async (req, res) => {
    const { email, password } = await req.body
    if (!email || !password) {
        const data = {
            status: 400,
            message: 'Error: Please fill all fields'
        }
        res.status(400).send(data)
        return
    }

    const employee = await Employee.findOne({ email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }

    if (!employee.password) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }

    const passwordMatch = await bcrypt.compare(password, employee.password)
    if (!passwordMatch) {
        const data = {
            status: 400,
            message: 'Error: Invalid password'
        }
        res.status(400).send(data)
        return
    }

    const data = {
        status: 200,
        message: 'Employee logged in successfully',
        token: generateToken(email)
    }
    res.status(200).send(data)

}

module.exports.SendEmailforPasswordReset = async (req, res) => {
    const { email } = await req.body
    console.log(email)
    const employee = await Employee.findOne({ email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }

    const data = {
        status: 200,
        message: 'Email sent successfully',
    }

    const token = generateToken(email)

    employee.reset_token = token;
    await employee.save();

    var RESETPASS_AUTH_USER = process.env.RESETPASS_AUTH_USER;
    var RESETPASS_AUTH_PASS = process.env.RESETPASS_AUTH_PASS;

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
    console.log("New Password Details: " + new_password, confirm_password, received_token)
    const employee = await Employee.findOne({ received_token })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Token does not exist'
        }
        res.status(400).send(data)
        return
    }

    const data = {
        status: 200,
        message: 'Password Updated successfully!',
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(new_password, salt)
    const employeeUpdate = await Employee.findOneAndUpdate({ received_token }, { password: hashedPassword })
    console.log("Hashed Password: " + hashedPassword)
    console.log("Employee Update: " + employeeUpdate)
    res.status(200).send(data)

}

module.exports.fetchEmployeeDetails = async (req, res) => {
    const { email } = await req.body
    const employee = await Employee.findOne({ email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }
    const data = {
        status: 200,
        message: 'Employee fetched successfully',
        employee
    }
    res.status(200).send(data)
}

module.exports.updateTheme = async (req, res) => {
    const { theme } = await req.body
    const employee = await Employee.findOne({ email: req.email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }
    employee.selectedTheme = theme
    await employee.save()
    const data = {
        status: 200,
        message: 'Theme updated successfully',
    }
    res.status(200).send(data)
}

module.exports.updateProfile = async (req, res) => {
    const { position, phoneNumber, website, bio } = await req.body
    const employee = await Employee.findOne({ email: req.email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }
    employee.position = position
    employee.phoneNumber = phoneNumber
    employee.website = website
    employee.bio = bio
    await employee.save()
    const data = {
        status: 200,
        message: 'Profile updated successfully',
        employee
    }
    res.status(200).send(data)
}

module.exports.updatePersonalInfo = async (req, res) => {
    const { firstName, lastName, dob, timeZone } = await req.body
    const employee = await Employee.findOne({ email: req.email })
    if (!employee) {
        const data = {
            status: 400,
            message: 'Error: Employee does not exist'
        }
        res.status(400).send(data)
        return
    }
    employee.firstName = firstName
    employee.lastName = lastName
    employee.dob = await utility.convertStringToDate(dob)
    employee.timeZone = timeZone
    await employee.save()
    const data = {
        status: 200,
        message: 'Personal Info updated successfully',
        employee
    }
    res.status(200).send(data)
}
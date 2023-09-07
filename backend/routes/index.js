const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const {requireAuth} = require('../middleware/auth')

// GET  api/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working")
})

// POST  api/employeeRoute/googleSignUp
router.post('/employeeRoute/googleSignUp',employeeController.googleSignup)

// POST  api/employeeRoute/signup
router.post('/employeeRoute/signup',employeeController.signup)

// POST  api/employeeRoute/login
router.post('/employeeRoute/login',employeeController.login)

// POST  api/employeeRoute/SendEmailforPasswordReset
router.post('/employeeRoute/SendEmailforPasswordReset',employeeController.SendEmailforPasswordReset)

// POST api/employeeRoute/ChangePasswordonReset
router.post('/employeeRoute/ChangePasswordonReset',employeeController.ChangePasswordonReset)

// POST api/employeeRoute/fetchEmployeeDetails
router.post('/employeeRoute/fetchEmployeeDetails', employeeController.fetchEmployeeDetails)

// POST api/employeeRoute/updateTheme
router.post('/employeeRoute/updateTheme', requireAuth, employeeController.updateTheme)

// POST api/employeeRoute/updateProfile
router.post('/employeeRoute/updateProfile', requireAuth, employeeController.updateProfile)

// POST api/employeeRoute/updatePersonalInfo
router.post('/employeeRoute/updatePersonalInfo', requireAuth, employeeController.updatePersonalInfo)

// POST api/employeeRoute/updateSingleColor
router.post('/employeeRoute/updateSingleColor', requireAuth, employeeController.updateSingleColor)

module.exports = router
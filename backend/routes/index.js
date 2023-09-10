const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {requireAuth} = require('../middleware/auth')

// GET  api/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working")
})

// POST  api/userRoute/googleSignUp
router.post('/userRoute/googleSignUp',userController.googleSignup)

// POST  api/userRoute/signup
router.post('/userRoute/signup',userController.signup)

// POST  api/userRoute/login
router.post('/userRoute/login',userController.login)

// POST  api/userRoute/SendEmailforPasswordReset
router.post('/userRoute/SendEmailforPasswordReset',userController.SendEmailforPasswordReset)

// POST api/userRoute/ChangePasswordonReset
router.post('/userRoute/ChangePasswordonReset',userController.ChangePasswordonReset)

// POST api/userRoute/fetchUserDetails
router.post('/userRoute/fetchUserDetails', userController.fetchUserDetails)

// POST api/userRoute/updateTheme
router.post('/userRoute/updateTheme', requireAuth, userController.updateTheme)

// POST api/userRoute/updateProfile
router.post('/userRoute/updateProfile', requireAuth, userController.updateProfile)

// POST api/userRoute/updatePersonalInfo
router.post('/userRoute/updatePersonalInfo', requireAuth, userController.updatePersonalInfo)

// POST api/userRoute/updateSingleColor
router.post('/userRoute/updateSingleColor', requireAuth, userController.updateSingleColor)

// POST api/userRoute/updateDateTimeValues
router.post('/userRoute/updateDateTimeValues', requireAuth, userController.updateDateTimeValues)

// POST api/userRoute/changePassword
router.post('/userRoute/changePassword', requireAuth, userController.changePassword)


module.exports = router
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const workspaceController = require('../controllers/workspaceController')
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

// POST api/userRoute/updateProfile
router.post('/userRoute/updateProfile', requireAuth, userController.updateProfile)

// POST api/userRoute/updatePersonalInfo
router.post('/userRoute/updatePersonalInfo', requireAuth, userController.updatePersonalInfo)

// POST api/userRoute/changePassword
router.post('/userRoute/changePassword', requireAuth, userController.changePassword)

// POST api/userRoute/verifyUserEmail
router.post('/userRoute/verifyUserEmail', userController.verifyUserEmail)

// POST api/workspaceRoute/workspaceOnboarding
router.post('/workspaceRoute/workspaceOnboarding', requireAuth, workspaceController.workspaceOnboarding)

// POST api/workspaceRoute/updateTheme
router.post('/workspaceRoute/updateTheme', requireAuth, workspaceController.updateTheme)

// POST api/workspaceRoute/updateSingleColor
router.post('/workspaceRoute/updateSingleColor', requireAuth, workspaceController.updateSingleColor)

// POST api/workspaceRoute/updateDateTimeValues
router.post('/workspaceRoute/updateDateTimeValues', requireAuth, workspaceController.updateDateTimeValues)

module.exports = router
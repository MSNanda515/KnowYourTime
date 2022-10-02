const express = require('express')

const ActivityController = require('../controllers/ActivityController')

const routes = express.Router()

routes.get('/', ActivityController.test)
routes.post('/', ActivityController.addActivity)
routes.get('/demo', ActivityController.addDemoUser)

module.exports = routes

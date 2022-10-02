const express = require('express')

const ActivityController = require('../controllers/ActivityController')
const UserController = require("../controllers/UserController");

const routes = express.Router()

routes.get('/', ActivityController.test)
routes.post('/', ActivityController.addActivity)


module.exports = routes

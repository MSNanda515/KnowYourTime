const express = require('express')

const UserController = require('../controllers/UserController')
const ActivityController = require("../controllers/ActivityController");

const routes = express.Router()

routes.get('/', UserController.test);
routes.get('/default/user', UserController.addDemoUser)
routes.get('/:userId/categories', UserController.getCategories);
routes.get('/:userId/default/categories', UserController.addDefaultCategories);

routes.post('/:userId/activity', UserController.addActivityLog);
routes.get('/:userId/activities', UserController.getActivities);

module.exports = routes

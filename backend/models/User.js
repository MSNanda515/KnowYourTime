const mongoose = require('mongoose')
const ActivityLogSchema = require("./ActivityLogSchema");
const Category = require("./Category");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        category: [Category],
        activity: [ActivityLogSchema]
    },
    { collection: 'users' }
)

module.exports = mongoose.model('User', UserSchema)
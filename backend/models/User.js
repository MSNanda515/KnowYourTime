const mongoose = require('mongoose')
const ActivityLogSchema = require("./ActivityLogSchema");

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
        activity: [ActivityLogSchema]
    },
    { collection: 'users' }
)

module.exports = mongoose.model('User', UserSchema)
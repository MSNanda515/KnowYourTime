const mongoose = require('mongoose')

const ActivityLogSchema = {
    category: String,
    start: Date,
    duration: Number,
}

module.exports = ActivityLogSchema;
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const db = require('./db')
const activityRoutes = require('./routes/ActivityRoutes')
const userRoutes = require('./routes/UserRoutes');

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/activity', activityRoutes)
app.use('/api/v1/user', userRoutes);

app.listen(process.env.PORT || 3000)
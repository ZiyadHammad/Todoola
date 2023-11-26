const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const port = process.env.PORT || 8080

// Connecting to MongoDB
connectDB()

// Express Config: Json
const app = express()
app.use(express.json())

// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Start Local Server
app.listen(port, () => {
    console.log(`listening on ${port}`.cyan.bold.underline)
})
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.URI)
    console.log(`MongoDB Connected ${conn.connection.host}`.yellow.bold.underline)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
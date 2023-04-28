const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Server Connected to: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        throw new Error("Couldn't connect to DB!")
    }
}

module.exports = connectDB 
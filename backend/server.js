const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors")
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRouter"))
app.use(errorHandler);

app.listen(port, () => console.log(`Server in the port ${port}`));


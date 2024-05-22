// Import required packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Import routes
const userRouter = require("./routes/authRoutes");
const dashboardRouter = require("./routes/userDashboardRoutes");
const paymentRouter = require("./routes/paymentRoute");
const adminRouter = require("./routes/adminRoutes");
const eventRouter = require("./routes/eventRoutes");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });

// Set Mongoose's strictQuery option to false to suppress deprecation warning
mongoose.set('strictQuery', false);

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Route setup
app.use("/", paymentRouter);
app.use("/user", userRouter);
app.use("/user", dashboardRouter);
app.use("/", adminRouter);
app.use("/", eventRouter);

// Root endpoint
app.get("/", (req, res) => {
    res.send("Event Management microservices API.");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

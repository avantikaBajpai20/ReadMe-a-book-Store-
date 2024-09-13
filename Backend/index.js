// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// const app = express();

// app.use(cors());
// app.use(express.json());//parsing in json

// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MONGO_URI;

// // connect to mongoDB
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

// // defining routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Initialize Express app
const app = express();

// Use CORS for handling cross-origin requests
app.use(cors());

// Use JSON middleware for parsing JSON bodies
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Define the port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async () => {
    try {
        if (!URI) {
            throw new Error('MONGO_URI environment variable not set');
        }
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure code
    }
};

// Call the connectDB function to establish the database connection
connectDB();

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

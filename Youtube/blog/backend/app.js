import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(5000))
    .then(() => console.log("connected to mongodb and server is listening on port 5000")
).catch((err) => console.log(err));
    
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// });


import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect(
    "mongodb+srv://chepesi:chepesi@nodecourse.zczeah6.mongodb.net/?retryWrites=true&w=majority"
).then(() => app.listen(5000))
    .then(() => console.log("connected to mongodb and server is listening on port 5000")
).catch((err) => console.log(err));
    
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// });


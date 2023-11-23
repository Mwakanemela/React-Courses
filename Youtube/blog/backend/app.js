import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";


const app = express();

app.use(express.json());
app.use('/api/users', router);
app.use('/api/blog', blogRouter);

mongoose.connect(
    "mongodb+srv://chepesi:chepesi@nodecourse.zczeah6.mongodb.net/chepesi-blog?retryWrites=true&w=majority"
).then(() => app.listen(5000))
    .then(() => console.log("connected to mongodb and server is listening on port 5000")
).catch((err) => console.log(err));
    
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// });


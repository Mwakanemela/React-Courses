const express = require("express");


//create instance of express
const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(9000, console.log("Server started on port 9000"))
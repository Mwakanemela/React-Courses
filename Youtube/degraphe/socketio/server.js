const express = require("express")
const Socket = require("socket.io")

const app = express();


const server = require("http").createServer(app);

const io = Socket(server, {
    cors: {
        origin: "*",
        method: ["GET", "POST"]
    }
})

let PORT = 5000
server.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})

const users = []

io.on("connection", (socket) => {
    console.log("connected to ", socket.id)

    socket.on("adduser", (username) => {
        socket.user = username;
        users.push(username)
        console.log("latest users", users)
        io.sockets.emit("users", users)
    })

    socket.on("message", (message) => {
        io.sockets.emit("message", {
            user: socket.user,
            message: message,
        })
    })

    socket.on("disconnect", () => {
        console.log("deleting ", socket.user)

        if (socket.user) {
            users.splice(users.indexOf(socket.user), 1);
        }
        io.sockets.emit("users", users)
        console.log('remaining users: ', users)
    })

    // socket.on("ping", (data) => {
    //     console.log(data, ": from ping event")
    // })
    // io.sockets.emit("message", {
    //     message: "Hi there from server.js"
    // })
})
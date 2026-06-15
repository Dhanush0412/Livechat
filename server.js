require("./config/db")
let express = require("express")

let app= express();
let http = require("http");
let server = http.createServer(app);
let {Server} = require("socket.io")
let io = new Server(server,{
    cors:{
        origin:"*"
    }
})
let socket = require("./socket/socket");
const { profile } = require("console");
socket.init(io)

app.use(express.json())
app.use("/uploads",express.static("uploads"))
app.use("/user",require("../sample_socialmedia_project/routes/userroutes"))
app.use("/profile",require("../sample_socialmedia_project/routes/profileroutes"))
app.use("/friend",require("../sample_socialmedia_project/routes/profileroutes"))
app.use("/posting",require("../sample_socialmedia_project/routes/postroutes"))
app.use("/group",require("../sample_socialmedia_project/routes/grouproutes"))
app.use("/send",require("../sample_socialmedia_project/routes/messageroutes"))
app.use("/get",require("../sample_socialmedia_project/routes/messageroutes"))
app.use("/message",require("../sample_socialmedia_project/routes/directmessageroutes"))

io.on("connection",(socket)=>{
    console.log("user connected")
    socket.on(
        "joingroup",
        (groupid)=>{
            socket.join(groupid)
        }
    )
    socket.on(
        "joinprofile",
        (profileid)=>{
            socket.join(profileid)
            console.log("joinedprofile",profileid)
        }

    )
})


server.listen(5000,()=>{
    console.log("server started");
})
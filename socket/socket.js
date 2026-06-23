let io 
module.exports= {
    init:(Socketio)=>{
        io = Socketio;
        io.on("connection",(socket)=>{

    socket.on(
        "register",
        (profileid)=>{
            socket.join(profileid);
        }
    );

});
    },
    getIO:()=>{
       return io
    }
}
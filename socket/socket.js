let io 
module.exports= {
    init:(Socketio)=>{
        io = Socketio;
    },
    getIO:()=>{
       return io
    }
}
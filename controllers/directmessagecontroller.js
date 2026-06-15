let Directmessage=require("../models/directmessage")
let socket = require("../socket/socket")
let senddirectmessage = async(req,res)=>{
   try {
       let {text,senderid,receiverid} = req.body
    let message= new Directmessage({
        text:text,
        sender:senderid,
        receiver:receiverid
    })
    await message.save()
    let populatedmessage = await Directmessage.findById(message._id)
    .populate("sender")
    .populate("receiver")
    
    socket.getIO()

.to(receiverid)

.emit(
    "receiveDirectMessage",
    populatedmessage
);

    return res.json(message)
   } catch (error) {
      console.log(error)
      return res.send("internal error")
   }
}


let getdirectmessage = async(req,res)=>{
   try {
     let {senderid,receiverid} = req.params
    let message = await Directmessage.find({
        $or:[
            {
                sender:senderid,
                receiver:receiverid
            },
            {
                sender:receiverid,
                receiver:senderid
            }
        ]

    })
    .populate("sender")
    .populate("receiver")
    .sort({
        createdAt:-1
    })
    return res.json(message)
   } catch (error) {
    console.log(error)
    return res.send("internal error")
   }
}

module.exports={senddirectmessage,getdirectmessage}
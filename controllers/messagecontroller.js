let Message = require("../models/message")
let Group = require("../models/group")
let Profile=require("../models/profile")
let socket = require("../socket/socket")

let sendmessage = async (req,res)=>{
    try {
        let{text,senderid,groupid}= req.body
         let message = new Message({
            text:text,
            sender:senderid,
            group:groupid
         })
         await message.save()
         let populatemessage = await Message.findById(message._id)
         .populate("sender")
         .populate("group")
         socket.getIO()
         .to(groupid)
         .emit("receivemessage",populatemessage)
         return res.json(message)
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

let getmessage = async(req,res)=>{
    try {
        let {groupid} = req.params
        let message = await Message.find({
            group:groupid
        })
        .populate("sender")
        .populate("group")
        .sort({
            createdAt:1
        })
        return res.send(message)
        
    } catch (error) {
       console.log(error)
       return res.send("internal error")
    }
}

module.exports={sendmessage,getmessage}
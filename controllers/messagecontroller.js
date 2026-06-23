let Message = require("../models/message")
let Group = require("../models/group")
let Profile=require("../models/profile")
let socket = require("../socket/socket")

// send message in group //
let sendmessage = async (req,res)=>{
    try {
        let{text,senderid,groupid}= req.body
        let group = await Group.findById(groupid)
        if(!group){
            return res.send("group not found")
        }
        if(!group.members.includes(senderid)){
           return res.send("you are not a member of this group");
          }
         if(!text || text.trim()===""){
           return res.send("message required");
          }
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
         return res.json(populatemessage)
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

// getting message in the group //
let getgroupmessage = async(req,res)=>{

    try {

        let {groupid,profileid} = req.params;
        let group = await Group.findById(groupid)
        if(!group){
            return res.send("group not exist")
        }
        if(!group.members.includes(profileid)){
            return res.send("access denied");
        }
        let messages =await Message.find({group:groupid})
        .populate("sender")
        .populate("group")
        .sort({createdAt:1});
        return res.json(messages);
    }
    catch(error){
        console.log(error);
        return res.send("internal error");
    }

}

module.exports={sendmessage,getgroupmessage}
let Connectionrequest = require("../models/connectionrequest")
let Profile = require("../models/profile")

// send request //

let sendrequest = async (req,res)=>{
    try {
        let {senderid,receiverid}= req.body;
        if(senderid == receiverid){
            return res.send("cannot send request to yourself")
        }
        let requestexist = await ConnectionRequest.findOne({

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

      });
        if(requestexist){
            return res.send("already request sent")
        }
        let request = new Connectionrequest({
            sender:senderid,
            receiver:receiverid
        })
        await request.save();
        return res.send("request sent")

    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

// pending request //

let pendingrequest = async(req,res)=>{
    try {
        let {profileid} = req.params;
        let requests = await Connectionrequest.find({
            receiver:profileid,
            status:"pending"
        })
        .populate("sender")
        return res.json(requests)
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

// accept request //

let acceptrequest = async(req,res)=>{
    try {
        let {requestid} = req.params;
        let request = await Connectionrequest.findById(requestid)
        if(!request){
            return res.send("request not found")
        }
        request.status="accepted"
        await request.save();

        let senderprofile = await Profile.findById(request.sender)
        let receiverprofile = await Profile.findById(request.receiver)
         
    } catch (error) {
       console.log(error)
       return res.send("internal error")   
    }
}
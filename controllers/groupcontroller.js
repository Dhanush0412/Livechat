let Group = require("../models/group")
let Profile = require("../models/profile")

let creategroup = async(req,res)=>{
    try {
        let {groupname,profileid}=req.body
        let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile not found")
        }
        let group = new Group({
            groupname:groupname,
            createdby:profileid,
            members:[profileid]
        })
        profile.groups.push(group._id)
        await group.save()
        await profile.save()
        return res.json(group)
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

let sendgroupinvite =
async(req,res)=>{

    try{

        let {
            groupid,
            senderid,
            receiverid
        } = req.body;

        let group =
        await Group.findById(
            groupid
        );

        if(!group){

            return res.send(
                "group not found"
            );

        }

        if(

            group.createdby.toString()!==senderid){

            return res.send("only admin can invite");

        }

        let sender =
        await Profile.findById(senderid);

        if(!sender.connections.includes(receiverid))
            {

            return res.send("user not connected");

        }

        let existingInvite =await GroupInvite.findOne({

            group:groupid,

            receiver:receiverid,

            status:"pending"

        });

        if(existingInvite){

            return res.send(
                "invite already sent"
            );

        }

        let invite =new GroupInvite({

            group:groupid,

            sender:senderid,

            receiver:receiverid

        });
        await invite.save();

        return res.send(
            "invite sent"
        );

    }

    catch(error){

        console.log(error);

        return res.send(
            "internal error"
        );

    }

}


module.exports={creategroup,sendgroupinvite};
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
        await profile.save()
        return res.json(group)
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}


let joingroup = async (req,res)=>{
    try {
        let {groupid,profileid} = req.params;
        let group = await Group.findById(groupid)
        let profile = await Profile.findById(profileid)
        if(!group || !profile){
            return res.send("profile or user not found")
        }
        if(group.members.includes(profileid)){
            return res.send("already joined")
        }
        group.members.push(profileid);
        profile.groups.push(groupid);
        await group.save();
        await profile.save();
        return res.send("profile added")
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

module.exports={creategroup,joingroup};
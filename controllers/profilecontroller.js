
let Profile = require("../models/profile")
let User = require("../models/user")


// creating profile //
let createprofile = async(req,res)=>{
   try{
    let {userid}= req.params
     let{bio} = req.body
    let userexist = await User.findById(userid)
    if(!userexist){
        return res.status(401).send("user not exist")
    }
    let profileexist = await Profile.findOne({user:userid})
    if(profileexist){
        return res.status(401).send("profile already existing")
    }
   let profile = new Profile({

    bio:bio,

    user:userid,

    profilepic:
    req.file
    ?
    req.file.filename:"default-profile.jpg"

})
    await profile.save()
    return res.json({

    message:"profile created",
    profileid:profile._id

   });
   }
   catch(error){
    console.log(error);
    return res.send("internal error")
   }
}


// Getting dashboard //
let getdashboard = async(req,res)=>{
   try {
       let {profileid} = req.params;
    let profile = await Profile.findById(profileid)

    .populate("user")
    if(!profile){
        return res.status(401).send("profile not exist")
    }
    
    return res.json({
        profileid : profile._id,
        username : profile.user.username,
        bio:profile.bio,
        profilepic : profile.profilepic,
        groups : profile.groups.length,
        connections:profile.connections.length
    })
   
   } catch (error) {
      console.log(error)
      return res.send("internal error")
   }
}



// profile pic updation //

let updatedprofilepic = async(req,res)=>{
    try {
        let {profileid} = req.params
        let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile not exist")
        }
        if(!req.file){

    return res.send(
        "please upload image"
    );}
profile.profilepic =req.file.filename;
        await profile.save();
        return res.json({
            message:"profile pic updated successfully",
            profilepic:profile.profilepic
        })

    } catch (error) {
        return res.send("internal error in profile setting")
    }
}


// bio update for setting //

let bioupdate = async(req,res)=>{
    try {
        let {profileid} = req.params
        let {bio} = req.body
        
        let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile is not found")
        }
        if(bio == ""){
            return res.send("bio required");
        }
        profile.bio=bio;
        await profile.save()
        return res.json({
            message:"bio updated",
            bio:profile.bio
        });
    } catch (error) {
       console.log(error)
       return res.send("internal error") 
    }
}

let profileedit = async(req,res)=>{
    try {
        let {profileid} = req.params
        let {bio} = req.body
        
        let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile not found")
        }
        if(bio){
            profile.bio=bio
        }
        if(req.file){
            profile.profilepic=req.file.filename;
        }
        await profile.save();
        return res.json({
            message:"profile edited",
            bio:profile.bio,
            profilepic:profile.profilepic
        })
    } catch (error) {
       console.log(error)
       return res.send("internal error")   
    }
}

module.exports={createprofile,getdashboard,updatedprofilepic,bioupdate,profileedit};
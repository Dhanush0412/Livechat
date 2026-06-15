let Post = require("../models/post")
let Profile = require("../models/profile")


// post creation //

let createpost = async(req,res)=>{
    try {
        let {caption,profileid}=req.body

        let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile not found")
        }        
        let post = new Post({
            caption:caption,
            media:req.file?
            req.file.path:"",
            profile:profileid
        })
        await post.save();
        return res.json(post);
    } catch (error) {
        console.log(error)
        return res.send("internal error");
    }
}


// post getting to the connected user //
let getfeed = async(req,res)=>{
    try {
    let {profileid} = req.params
    let profile = await Profile.findById(profileid)
        if(!profile){
            return res.send("profile not found")
        }  
        let posts = await Post.find({
            profile:{
                $in:[...profile.connections,
                    profile._id
                ]
            }
        })
        .populate({
            path:"profile",
            populate:{
                path:"user"
            }
        })
        .sort(
            {
                createdAt:-1
            }
        )
      return res.json(posts);
} catch (error) {
    console.log(error)
    return res.send("internal error")
}
}

module.exports= {createpost,getfeed}
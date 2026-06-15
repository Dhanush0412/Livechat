let User = require("../models/user")
let bcrypt = require("bcrypt")

// signup //

let signup = async(req,res)=>{
   try {
       let {username,password} = req.body
    let userexist = await User.findOne({username});
    if(userexist){
        return res.status(401).send("user already exist")
    }
    else{
        let hashedpassword = await bcrypt.hash(
            password,10
        )
        let user = new User({
            username:username,
            password:hashedpassword
        })
        await user.save();
        return res.send("user successfully signup in")
    }
   } catch (error) {
    console.log(error)
   }
    
}
// login //

let login = async(req,res)=>{
    try {
        let {username,password} = req.body
        let userexist = await User.findOne({username:username})
        if(!userexist){
            return res.status(401).send("user not exist")
        }
        else{
            let ismatch = await bcrypt.compare(
                password,
                userexist.password
            )
            if(ismatch){
                return res.send("loggedin successfully")
            }
            else{
                return res.status(201).send("invalid password")
            }
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {signup,login};
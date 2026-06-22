let mongoose = require("mongoose")

let Otpschema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    expiresAt:{
        type:Date,
        required:true
    }
})

let Otp = mongoose.model(
    "Otp",
    Otpschema
)

module.exports=Otp;
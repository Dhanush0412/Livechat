let mongoose = require("mongoose")

let messageschema = mongoose.Schema({
    text:{
        type:String
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    group:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Group"
    }
},{
    timestamps:true
})

let Message = mongoose.model(
    "Message",
    messageschema
)

module.exports=Message;
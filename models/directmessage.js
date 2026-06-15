let mongoose = require("mongoose")

let directmessageschema = mongoose.Schema({
    text:{
        type:String
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    }
},{
    timestamps:true
})

let Directmessage = mongoose.model(
    "Directmessage",
    directmessageschema
)

module.exports=Directmessage;
let mongoose = require("mongoose")
const Connectionrequest = require("./connectionrequest")
const { acceptrequest } = require("../controllers/connectionrequestcontroller")
const Groupinvite = require("./groupinvite")

let notificationschema = mongoose.Schema({
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profile",
        required:true
    },
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profile",
        required:true
    },
    type:{
        type:String,
        enum:[
            "connectionrequest",
            "acceptrequest",
            "groupinvite",
            "like"
        ],
        required:true
    },
    message:{
        type:String,
        required:true
    },
    read:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

let Notification = mongoose.model(
    "Notification",
    notificationschema
)

module.exports=Notification;
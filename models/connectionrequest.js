let mongoose = require("mongoose")

let connectionrequestschema = mongoose.Schema({
     sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },

    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },

    status:{
        type:String,
        enum:[
            "pending",
            "accepted",
            "rejected"
        ],
        default:"pending"
    }
},{
    timestamps:true
})

let Connectionrequest = mongoose.model(
    "Connectionrequest",
    connectionrequestschema
)

module.exports= Connectionrequest;
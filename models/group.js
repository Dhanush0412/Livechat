let mongoose = require("mongoose")

let groupschema = mongoose.Schema({
    groupname:{
        type:String,
        required:true
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref :"Profile"
    }]
})

let Group = mongoose.model(
    "Group",
    groupschema
)

module.exports=Group;
let mongoose = require("mongoose")

let groupschema = mongoose.Schema({
    groupname:{
        type:String,
        required:true
    },
    groupimage:{
      type:String,
      default:"https://res.cloudinary.com/dubjosis9/image/upload/v1782300064/demoimage_b0q161.jpg"
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
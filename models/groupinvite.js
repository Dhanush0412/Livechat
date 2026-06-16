let mongoose=require("mongoose")

let groupinviteschema = mongoose.Schema(
    {
         group:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Group"
    },

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

let Groupinvite = mongoose.model(
    "Groupinvite",
     groupinviteschema
)

module.exports=Groupinvite;
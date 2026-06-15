let express = require("express")
let router = express.Router()

let {sendmessage,getmessage} = require("../controllers/messagecontroller")

router.post("/message",sendmessage)
router.get("/message/:groupid",getmessage)

module.exports=router
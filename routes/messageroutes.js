let express = require("express")
let router = express.Router()
let verifytoken=require("../middelware/auth")
let {sendmessage,getgroupmessage} = require("../controllers/messagecontroller")
let {groupchatpreview} = require("../controllers/groupcontroller")

router.post("/chat",verifytoken,sendmessage)
router.get("/getting/:groupid",verifytoken,getgroupmessage)
router.get("/chatpreview",verifytoken,groupchatpreview)

module.exports=router
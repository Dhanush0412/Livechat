let express = require("express")
let router= express.Router();

let {senddirectmessage,getdirectmessage} = require("../controllers/directmessagecontroller")

router.post("/send",senddirectmessage)
router.get("/getting/:senderid/:receiverid",getdirectmessage)

module.exports=router
let express = require("express")
let router= express.Router();

let {senddirectmessage,getdirectmessage,markmessagesread,unreadcount,getchatlist,chatpreview} = require("../controllers/directmessagecontroller")

router.post("/sending",senddirectmessage)
router.get("/chatpreview/:profileid",chatpreview)
router.get("/chatlist/:profileid",getchatlist)
router.get("/unread/:profileid",unreadcount)
router.put("/read/:senderid/:receiverid",markmessagesread)
router.get("/getting/:senderid/:receiverid",getdirectmessage)

module.exports=router
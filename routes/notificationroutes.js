let express = require("express")
let router = express.Router();
let verifytoken=require("../middelware/auth")
let {getnotifications,markasread} = require("../controllers/notificationcontroller")

router.get("/get",verifytoken,getnotifications)
router.put("/read/:notificationid",verifytoken,markasread)

module.exports=router
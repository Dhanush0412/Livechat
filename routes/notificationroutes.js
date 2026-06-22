let express = require("express")
let router = express.Router();

let {getnotifications,markasread} = require("../controllers/notificationcontroller")

router.get("/get/:profileid",getnotifications)
router.put("/read/:notificationid",markasread)

module.exports=router
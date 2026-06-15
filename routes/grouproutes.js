let express = require("express")

let router = express.Router()

let {creategroup,joingroup} = require("../controllers/groupcontroller")
router.post(
    "/create",creategroup
)
router.put(
    "/join/:groupid/:profileid",
    joingroup
)

module.exports=router;
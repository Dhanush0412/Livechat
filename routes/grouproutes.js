let express = require("express")

let router = express.Router()

let {creategroup,sendgroupinvite} = require("../controllers/groupcontroller")
router.post("/new",creategroup)
router.post("/invite",sendgroupinvite)


module.exports=router;
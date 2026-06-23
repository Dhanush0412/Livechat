let express = require("express")
let router = express.Router();
let verifytoken=require("../middelware/auth")
let getchatlist = require("../controllers/chatcontroller")

router.get("/chatlist",verifytoken,getchatlist)

module.exports=router;
let express = require("express")
let router = express.Router();

let getchatlist = require("../controllers/chatcontroller")

router.get("/chatlist/:profileid",getchatlist)

module.exports=router;
let express = require("express")
let router = express.Router();
let verifytoken = require("../middelware/auth")
let {updatedactivity,getactivity} = require("../controllers/activitycontroller")

router.post("/update",verifytoken,updatedactivity)
router.get("/get",verifytoken,getactivity)
module.exports=router
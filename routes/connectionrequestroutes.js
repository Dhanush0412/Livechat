let express = require("express")
let router = express.Router();
let verifytoken=require("../middelware/auth")
let {sendrequest,pendingrequest,acceptrequest,rejectrequest,getconnections}= require("../controllers/connectionrequestcontroller")

router.post("/send",verifytoken,sendrequest);
router.get("/pending",verifytoken,pendingrequest);
router.put("/accept/:requestid",verifytoken,acceptrequest);
router.put("/reject/:requestid",verifytoken,rejectrequest);
router.get("/list",verifytoken,getconnections);
module.exports=router;
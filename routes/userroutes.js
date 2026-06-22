let express = require("express")
let router = express.Router();
let {signup,login, forgotpassword,sendotp,verifyotp, searchuser} = require("../controllers/usercontroller")

router.post("/signup",signup)
router.post("/login",login)
router.put("/forgot",forgotpassword)
router.post("/sentotp",sendotp)
router.post("/verifyotp",verifyotp)
router.get("/search",searchuser)
module.exports=router;
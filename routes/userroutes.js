let express = require("express")
let router = express.Router();
let {signup,login} = require("../controllers/usercontroller")

router.post("/signup",signup)
router.post("/login",login)

module.exports=router;
let express = require("express")
let upload= require("../config/multer")
let router = express.Router();

let {createprofile,getdashboard,updatedprofilepic} = require("../controllers/profilecontroller");
router.post("/create/:userid",upload.single("profilepic"),createprofile);
router.get("/dashboard/:profileid",getdashboard);
router.put("/profilepic/:profileid",upload.single("profilepic"),updatedprofilepic)

module.exports= router;
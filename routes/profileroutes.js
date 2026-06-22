let express = require("express")
let upload= require("../config/multer")
let router = express.Router();

let {createprofile,getdashboard,updatedprofilepic,bioupdate,profileedit} = require("../controllers/profilecontroller");
router.post("/create/:userid",upload.single("profilepic"),createprofile);
router.get("/dashboard/:profileid",getdashboard);
router.put("/profilepic/:profileid",upload.single("profilepic"),updatedprofilepic)
router.put("/bio/:profileid",bioupdate)
router.put("/edit/:profileid",upload.single("profilepic"),profileedit)

module.exports= router;
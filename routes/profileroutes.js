let express = require("express")
let router = express.Router();

let {createprofile,getdashboard, connectionprofile} = require("../controllers/profilecontroller")

router.post("/createprof",createprofile);
router.get("/dashboard/:profileid",getdashboard);
router.post("/connect/:profileid/:friendid",connectionprofile)
module.exports= router;
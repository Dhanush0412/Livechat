let multer = require("multer")
let {CloudinaryStorage}=require("multer-storage-cloudinary")
let cloudinary = require("../config/cloudinary")

let storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"pandachat" 
    }
})

let upload = multer({storage})

module.exports=upload
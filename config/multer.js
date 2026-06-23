let multer = require("multer");


// storage its used for storing the file //
let storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
           cb(
            null,
            "uploads/"
           );
        },
        filename:(req,file,cb)=>{
            cb(
                null,
                Date.now()+"-"+ file.originalname
            )
        }
    }
)
let upload = multer({
    storage:storage
})

module.exports=upload;
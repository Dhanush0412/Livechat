let mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Dhanush:Dhanush%40123@cluster1.pnisbey.mongodb.net/?appName=Cluster1")
.then(()=>{
    console.log("MongoDB connected")
})
.catch((err)=>{
    console.log(err)
})
let nodemailer =
require("nodemailer");
console.log(process.env.EMAIL);
console.log(process.env.APP_PASSWORD);

let transporter = nodemailer.createTransport({
    service:"gmail",

    auth:{
        user:process.env.EMAIL,
        pass:process.env.APP_PASSWORD
    }

});

module.exports =transporter;
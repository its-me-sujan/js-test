// package callled nodemailer
// package require
// nodemailer initializer; transporter => GMAIL
// transporter.sendMail()

const nodemailer = require("nodemailer");

//email body
const mailOptions = {
  from: '"er.sujan shrestha" <ss9984261@gmail.com>',
  to: "gyalwanglama123@gmail.com, poornima.mrsn@gmail.com",
  subject: "sending email",
  text: "Hello K xa email aayo hai",
  html: "<b> Hello K xa email aayo hai</b>",
};
// ready/initialize gmail transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ss9984261@gmail.com",
    pass: "",
  },
});
//to send mail
const mailer = async(mailOptions, transporter) => {
//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//     //call back function (err, info) if a function passes value to other function ;order (false data, true data)
//   });
    console.log('sending Email....');
    const info = await transporter.sendEmail(mailOptions);
    console.log({info: info.response});
};

mailer(mailOptions, transporter);
       
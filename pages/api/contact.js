export default function ContactFrom (req, res) {
    

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.hostinger.com",
         auth: {
              user: 'ask@dhimaan.in',
              pass: '',
           },
      secure: true,
    });
    
    const mailData = {
        from: 'ask@dhimaan.in',
        to: 'ask@dhimaan.in',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
   }
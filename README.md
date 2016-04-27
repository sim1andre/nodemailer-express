##Nodemailer Express Template

##About
This is a working example of nodemailer and Express JS <br>
Send email from your application

<br>

##How to set up

<br>
1. Clone repository `git clone https://github.com/sim1andre/nodemailer-express.git` <br>
2. Install all dependencies `npm install` <br>
3. Find config in api -> config -> mail-config.js <br>
````````````
import nodemailer from 'nodemailer'

const Mail = nodemailer.createTransport({
      host: 'HOSTNAME',
      port: PORTNUMBER,
      auth: {
          user: 'USERNAME/EMAIL',
          pass: 'PASSWORD'
      }
})

export default Mail
````````````
<br>
4. Update with your settings <br>
6. Start server `node start`

<br>
<br>

##How to test


``````
let fields = {
    from: req.body.sender ? req.body.sender : req.query.sender,
    to: req.query.reciver ? req.query.reciver : req.body.reciver,
    subject: req.query.subject ? req.query.subject : req.body.subject,
    html: req.body.message ? req.body.message : req.query.message
}
``````

1. Install postman <br>
2. Set to "POST" <br>
3. Insert url `localhost:14000/notify-mail?sender=SENDERMAIL&reciver=RECIVERMAIL&subject=SUBJECT&responce=RESPONCE` <br>
4. Click "Send"

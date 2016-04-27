##Nodemailer Express Template

##About
This is a working example of nodemailer and Express JS
Send email from your application

<br>

##How to set up

<br>
1. Clone repository `git clone https://github.com/sim1andre/nodemailer-express.git`
2. Install all dependencies `npm install`
3. Find config in api -> config -> mail-config.js
<br>
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
4. Update with your settings
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

1. Install postman
2. Set to "POST"
3. Insert url `localhost:14000/notify-mail?sender=SENDERMAIL&reciver=RECIVERMAIL&subject=SUBJECT&responce=RESPONCE`
4. Click "Send"

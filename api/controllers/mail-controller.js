import Mail from '../config/mail-config'

class Email {

  static response(req, res, next) {

    let fields = {
      from: req.body.sender ? req.body.sender : req.query.sender,
      to: req.query.reciver ? req.query.reciver : req.body.reciver,
      subject: req.query.subject ? req.query.subject : req.body.subject,
      html: req.body.message ? req.body.message : req.query.message
    }

    Mail.sendMail(fields, function(err, info){

      if(err){
        res.send('Something went wrong')
        return next(err)
      }
      else{
        res.send(req.body.response ? req.body.response : req.query.response)
      }

    })

  }

}

export default Email

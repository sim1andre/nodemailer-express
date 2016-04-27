import Email from '../controllers/mail-config'

export default function mail_routes(app, router) {

  //MAIL ROUTE
  app.post('/notify-email', Email.responce)

  app.use('/', router)

}

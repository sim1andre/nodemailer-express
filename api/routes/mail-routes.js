import Email from '../controllers/mail-controller'

export default function mail_routes(app, router) {

  //MAIL ROUTE
  app.post('/notify-email', Email.responce)

  app.use('/', router)

}

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

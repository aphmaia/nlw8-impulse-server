import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f880f1b0b1f268",
    pass: "0db512c327b5f7"
  }
}); 

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

  await transport.sendMail({
    from: 'Equipe FeedGet <equipe@feedget.com.br>',
    to: 'André Phelipe Maia <aphmaia@gmail.com>',
    subject,
    html: body
  });

  }
}
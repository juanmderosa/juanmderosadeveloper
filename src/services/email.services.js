import mailer from "nodemailer";

export default class MailingService {
  constructor() {
    this.client = mailer.createTransport({
      service: import.meta.env.MAILING_SERVICE,
      host: import.meta.env.MAILING_HOST,
      port: 587,
      auth: {
        user: import.meta.env.MAILING_USER,
        pass: import.meta.env.MAILING_PASSWORD,
      },
    });
  }

  sendMail = async ({ from, to, subject, html }) => {
    let result = await this.client.sendMail({
      from,
      to,
      subject,
      html,
    });
    return result;
  };
}

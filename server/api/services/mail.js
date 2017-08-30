import nodemailer from 'nodemailer';
import config from '../../config/config';

export const sendMail = (req, res) => {
  const { name } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.emailLogin,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: 'Academia Británica de Ballet',
    to: 'jorge.ricaldi@gmail.com',
    subject: 'Consulta Horario',
    text: `Mensaje hecho por ${name}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ yo: 'error' });
    } else {
      console.log(`Message sent: ${info.response}`);
      res.json({ yo: info.response });
    }
  });
};

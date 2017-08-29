import * as mailService from '../services/mail';

export const sendMail = (req, res) => {
  mailService.sendMail(req, res);
};

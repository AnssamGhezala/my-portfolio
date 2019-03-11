const nodemailer = require("nodemailer");

const config = require("./config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    ...config
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "ghezala.anssam@gmail.com",
    subject: `New message from ${from} at my-portfolio`,
    text: text,
    replyTo: from
  ***REMOVED***

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
***REMOVED***

module.exports = send;

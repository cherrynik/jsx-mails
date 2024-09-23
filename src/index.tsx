import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";
import { Welcome } from "./markup/Welcome";

const htmlContent = ReactDOMServer.renderToStaticMarkup(<Welcome />);
const from = "";
const to = "";

const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL",
      pass: "PASSWORD",
      // For gmail generate app password here: https://myaccount.google.com/apppasswords
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

sendEmail(to, "Welcome!", htmlContent)
  .then(() => console.log("Email sent!"))
  .catch((err) => console.error("Failed to send email:", err));

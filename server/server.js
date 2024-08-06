const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3300;
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const myEmail = "imretoth1990@gmail.com";
const myPassword = "fynm urbq inis fpve";

function sendEmail({ name, email, telNumber, message }) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: myPassword,
      },
    });

    const mail_configs = {
      from: myEmail,
      to: email,
      subject: name + " sent an email!",
      text: "Name: " + name + ", " + "Tel.Number: " + telNumber + ", Message: " + message,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occured" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`CatSitting Project is listening at http://localhost:${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mailer = require("./mailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const name = req.body.name;
  const text = req.body.message;
  mailer({ email, name, text })
    .then(() => {
      console.log(`Sent the message "${text}" from <${name}> ${email}.`);
      res.redirect("/#success");
    })
    .catch(error => {
      console.log(
        `Failed to send the message "${text}" from <${name}> ${email} with the error ${error &&
          error.message}`
      );
      res.redirect("/#error");
    });

  res.send(
    `Thank you ${
      req.body.name
    } ! The email was sent successfully and I will respond shortly ! :) `
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

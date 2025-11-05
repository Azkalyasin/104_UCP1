const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("server run in port");
});

db.sequelize
  .sync()
  .then((result) => {
    app.listen(3001, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
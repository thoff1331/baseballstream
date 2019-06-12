require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");

app.use(express.json());

const { CONNECTION_STRING, PORT } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => {
    err;
  });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

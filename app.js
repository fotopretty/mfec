"use strict";
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const routes = require('./routes/index');

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));
// Set Parses JSON
app.use(express.json());

app.use(favicon(__dirname + "/favicon.ico"));
app.use("/js", express.static("js"));
app.use("/image", express.static("image"));
app.use("/css", express.static("css"));

app.use("/", routes);

/* app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});
 */


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());



module.exports = app;
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const secrets = {
  dbUri:
    process.env.DB_URI ||
    "mongodb+srv://pavel:994NBQ2xxDQ8Udu@cluster0-x71vn.mongodb.net/test?retryWrites=true&w=majority",
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };

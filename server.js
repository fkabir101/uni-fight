const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
//for login with passport
const bodyParser = require('body-parser')
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy


const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/unifight", { useNewUrlParser: true });

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})
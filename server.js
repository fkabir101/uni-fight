const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
<<<<<<< HEAD
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware/loginMiddleware');
=======


>>>>>>> 1cbbae54c4785f8cea3b1f54b0dced1176c047f3
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})
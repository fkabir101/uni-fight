const express = require("express");
const routes = require("./routes");
const app = express();
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware/loginMiddleware');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cookieParser());

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})
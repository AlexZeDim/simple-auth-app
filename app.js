const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require("cors");

const signinRouter = require('./routes/signin');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

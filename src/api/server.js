const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const DB = process.env.DATABASE_LOCAL || 'mongodb://localhost:27017/SOUQ-CAT';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

app.use(morgan('dev'));

const port = process.env.PORT || 2700;
const server = app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}...`);
});

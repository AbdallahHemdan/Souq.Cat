const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const productRouter = require(`${__dirname}\\routes\\product.route.js`);

const DB = process.env.DATABASE_LOCAL || 'mongodb://localhost:27017/SOUQ-CAT';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/products', productRouter);

const port = process.env.PORT || 2700;
const server = app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}...`);
});

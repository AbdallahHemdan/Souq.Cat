const express = require('express');
const productController = require(`${__dirname}\\..\\controllers\\product.controller.js`);
const router = express.Router();

router
  .route('/')
  .get(productController.getProduct);

router
  .route('/:id')
  .get(productController.getProductById);

module.exports = router;
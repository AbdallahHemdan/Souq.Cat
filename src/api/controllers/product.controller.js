const Product = require(`${__dirname}\\..\\models\\product.model.js`);

exports.getProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).send({
    status: 'success',
    products,
    total: products.length
  })
};
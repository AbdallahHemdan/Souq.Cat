const Product = require(`${__dirname}\\..\\models\\product.model.js`);

exports.getProduct = async (req, res) => {
  const products = await Product
    .find()
    .select('-__v -_id');
  res.status(200).send({
    status: 'success',
    products,
    total: products.length
  });
};

exports.getProductById = async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).send({
      status: 'error',
      message: 'Please enter a number'
    });
  }
  const id = req.params.id * 1;
  if (id < 0) {
    return res.status(400).send({
      status: 'error',
      message: 'Please enter a positive id'
    });
  }
  const product = await Product
    .find({
      id: id
    })
    .select('-__v -_id');
  res.status(200).send({
    status: 'success',
    product
  });
};
const mognoose = require('mongoose');


const productSchema = mognoose.Schema({
  id: {
    type: Number,
    unique: [true, 'This id is already taken!'],
    required: [true, 'Please enter product id!'],
    min: [0, 'Please enter positive id!']
  },
  name: {
    type: String,
    trim: true,
    minlength: [5, 'The name is very short!']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price!'],
    min: [0, 'Please enter positive price!']
  },
  image: {
    type: String,
    default: '/Souq.Cat/default.jpg'
  },
  description: {
    type: String,
    required: [true, 'Please enter product description!'],
    minlength: [5, 'Product description is very short!']
  }
});

const Product = mognoose.model('Product', productSchema);

module.exports = Product;
import Products from './products.json';
const axios = require('axios').default;

export async function getAll() {
  try {
    const res = await axios.get('http://127.0.0.1:2700/api/v1/products');
    return res;
  } catch (err) {
    return Promise.resolve(Products);
  }
}
export async function getById(id) {
  try {
    const res = await axios.get(`http://127.0.0.1:2700/api/v1/products/${id}`);
    return res;
  } catch (err) {
    const Product = Products.find((item) => item.id === id);
    return Promise.resolve(Product);
  }
}

export default {
  getAll,
  getById
};
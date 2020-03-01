import Products from "./products.json";

export function getAll() {
  return Promise.resolve(Products);
}
export function getById(id) {
  const Product = Products.find(item => item.id === id);
  return Promise.resolve(Product);
}

export default {
  getAll,
  getById
};

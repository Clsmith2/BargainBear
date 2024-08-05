// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  link: String,
  tcin: String,
  dpci: String,
  brand: String,
  rating: Number,
  ratings_total: Number,
  main_image: String,
  page: Number,
  position_overall: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

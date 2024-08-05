// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products - Get all products
router.get('/', productController.getAllProducts);

// GET /api/products/first/:count - Get the first x products
router.get('/first/:count', productController.getFirstXProducts);

// Additional CRUD operations can be added here

module.exports = router;

const express = require('express');
// const Product = require('../models/productModels');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router();

// query for all products in database
router.get('/', getProducts);

//get productby id
router.get('/:id', getProduct);

// creaate new product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product

router.delete('/:id', deleteProduct);

module.exports = router;
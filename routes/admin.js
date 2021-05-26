const path = require('path');

const express = require('express');
const { body } = require('express-validator');

const adminController = require('../controllers/adminController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isString().withMessage('Title must contain atleast 3 characters.')
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat().withMessage('Price must be a decimal value.'),
    body('description')
      .isLength({ min: 5, max: 400 }).withMessage('Description must be between 5-400 characters.')
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString().withMessage('Title must contain atleast 3 characters.')
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat().withMessage('Price must be a decimal value.'),
    body('description')
      .isLength({ min: 5, max: 400 }).withMessage('Description must be between 5-400 characters.')
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;

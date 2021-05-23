const express = require('express');

const authController = require('../controllers/authController')

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignUp);

router.get('/reset', authController.getReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignUp);

router.post('/logout', authController.postLogout);

router.post('/reset', authController.postReset);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
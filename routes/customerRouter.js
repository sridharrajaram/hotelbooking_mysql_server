const customerController = require('../controllers/customerController.js');
const express = require('express');
const router = express.Router();

router.get('/', customerController.getAllCustomers)
router.post('/addNewCustomer', customerController.addCustomer)

module.exports = router
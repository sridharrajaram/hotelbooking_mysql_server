const roomController = require('../controllers/roomController.js');
const express = require('express');
const router = express.Router();

router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getSingleRoom);
router.post('/addNewRoom', roomController.addRoom);

module.exports = router
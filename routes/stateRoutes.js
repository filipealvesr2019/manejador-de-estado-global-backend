const express = require('express');
const { setState, getState } = require('../controllers/stateController');

const router = express.Router();
router.post('/', setState);
router.get('/:key',  getState);

module.exports = router;

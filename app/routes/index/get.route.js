const express = require('express');
const indexhHandle = require('../../controllers/index');

const router = express.Router();

/**
 * Get index route by id
 */

const getIndex = router.get('', (req, res, next) => {
	indexhHandle.renderIndex(req, res);
});

module.exports = getIndex;

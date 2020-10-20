const express = require('express');

const router = express.Router();

/**
 * Get list from index route
 */

const getIndexList = router.get('/', (req, res, next) => {
	res.render('index');
});

module.exports = getIndexList;

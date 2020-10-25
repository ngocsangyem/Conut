const express = require('express');

const router = express.Router();

const error500 = router.get('/500', (req, res, next) => {
	const err = new Error('Internal server error');
	err.status = 500;
	next(err);
});

module.exports = error500;

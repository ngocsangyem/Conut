const express = require('express');

const router = express.Router();

const error403 = router.get('', (req, res, next) => {
	const err = new Error('Bad request');
	err.status = 403;
	next(err);
});

module.exports = error403;

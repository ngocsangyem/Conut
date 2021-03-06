const express = require('express');

const router = express.Router();

const error404 = router.get('', (req, res, next) => {
	const err = new Error('Page Not Found');
	err.status = 404;
	next(err);
});

module.exports = error404;

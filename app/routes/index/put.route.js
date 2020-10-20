const express = require('express');

const router = express.Router();

/**
 * Put index route
 */

const putIndex = router.put('/:dirname', (req, res, next) => {});

module.exports = { putIndex };

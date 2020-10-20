const express = require('express');

const router = express.Router();

/**
 * Post index route
 */

const postIndex = router.post('/', (req, res, next) => {});

module.exports = { postIndex };

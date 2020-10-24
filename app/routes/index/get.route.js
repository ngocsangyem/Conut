const express = require('express');
const generateID = require('../../helpers/generateId');

const router = express.Router();

/**
 * Get index route by id
 */

const getIndex = router.get('/', (req, res, next) => {
	res.render('index', {
		key: generateID(10),
		memory: process.memoryUsage(),
		cpu: process.cpuUsage(),
		platform: process.platform,
		node: process.versions,
	});
});

module.exports = getIndex;

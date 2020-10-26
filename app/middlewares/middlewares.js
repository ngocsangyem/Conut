const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const Multer = require('./multer');
const engine = require('./engine');
const { config } = require('../config/config');

module.exports = function (app) {
	app.use(bodyParser.json());
	engine(app, path);
	app.use(
		config.static,
		express.static(path.resolve(__dirname, '../public'))
	);

	app.use(compression());
};

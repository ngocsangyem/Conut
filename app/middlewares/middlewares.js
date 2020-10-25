const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const engine = require('./engine');

const { path } = require('../../config/utils');
const { config } = require('../../config/config');

module.exports = function (app) {
	app.use(bodyParser.json());
	engine(path);
	app.use(
		config.static,
		express.static(path.resolve(__dirname, '../public'))
	);

	app.use(compression());
};

const express = require('express');
const bodyParser = require('body-parser');
const { path } = require('../../config/utils');
const { config } = require('../../config/config');

module.exports = function (app) {
	app.use(bodyParser.json());
	app.set('view engine', 'pug');
	app.set('views', path.resolve(__dirname, 'views'));

	app.use(
		config.static,
		express.static(path.resolve(__dirname, '../public'))
	);
	app.get(config.static + '/*', function (req, res) {
		res.status(404).send('Not found');
	});
};

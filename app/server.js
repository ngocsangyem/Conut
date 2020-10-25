const express = require('express');
const browserSync = require('browser-sync');

const addMiddlewares = require('./middlewares/middlewares');
const addRoutes = require('./routes/routes');

const { config } = require('../config/config');
const { paths } = require('../config/paths');

const app = express();
const listenApp = () => {
	browserSync({
		files: [paths.components('**/*.{js,css}')],
		notify: true,
		online: true,
		open: true,
		port: config.port,
		proxy: 'localhost:' + config.port,
		ui: false,
	});
};

addMiddlewares(app);
addRoutes(app);

app.listen(config.port, listenApp);

const express = require('express');

const addMiddlewares = require('./middlewares/middlewares');
const addRoutes = require('./routes/routes');
const { config } = require('../config/config');

const app = express();

addMiddlewares(app);
addRoutes(app);

app.listen(config.port, () => {
	console.log('Listen to http://localhost:' + config.port);
});

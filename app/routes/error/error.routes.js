const error403 = require('./403.route');
const error404 = require('./404.route');
const error500 = require('./500.route');

const ErrorRouter = {
	error403,
	error404,
	error500,
};

module.exports = ErrorRouter;

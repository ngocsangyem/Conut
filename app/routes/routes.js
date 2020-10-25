const IndexRouter = require('./index/index.routes');
const ErrorRouter = require('./error/error.routes');
const errorHandle = require('../controllers/error');

module.exports = function (app) {
	app.use('/', [IndexRouter.getIndex]);
	app.use('/index.yem', [IndexRouter.getIndex]);

	app.use('*', ErrorRouter.error404);
	app.use(function (err, req, res, next) {
		switch (err.status) {
			case 403:
				errorHandle.render403(err, req, res, next);
			case 404:
				errorHandle.render404(err, req, res, next);
				break;
			case 500:
				errorHandle.render500(err, req, res, next);
			default:
				next();
				break;
		}
	});
};

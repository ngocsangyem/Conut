const IndexRouter = require('./index/index.routes');
const ErrorRouter = require('./error/error.routes');

module.exports = function (app) {
	app.use('/', [IndexRouter.getIndex]);

	app.use('*', ErrorRouter.error404);
	app.use(function (err, req, res, next) {
		switch (err.status) {
			case 404:
				res.status(err.status || 404);
				res.render('error/error', {
					url: req.url,
					errorTitle: '404',
					description: 'Oops! Something is wrong.',
				});
				break;
			case 500:
				res.status(err.status || 500);
				res.render('error/error', {
					error: err,
					errorTitle: '500',
					description: 'Internal server error',
				});
			default:
				next();
				break;
		}
	});
};

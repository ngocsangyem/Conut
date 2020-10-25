module.exports = {
	render: function (err, res, statusCode, path, options) {
		res.status(err.status || statusCode);
		res.render(path, options);
	},
	render404: function (err, req, res, next) {
		this.render(err, res, 404, 'error/error', {
			url: req.url,
			errorTitle: '404',
			description: 'Oops! Page not found',
		});
	},
	render500: function (err, req, res, next) {
		this.render(err, res, 500, 'error/error', {
			error: err,
			errorTitle: '500',
			description: 'Internal server error',
		});
	},
	render403: function (err, req, res, next) {
		this.render(err, res, 403, 'error/error', {
			error: err,
			errorTitle: '403',
			description: 'Forbidden',
		});
	},
};

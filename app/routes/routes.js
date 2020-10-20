const IndexRouter = require('./index/index.routes');

module.exports = function (app) {
	app.use('/', [
		IndexRouter.deleteIndex,
		IndexRouter.getIndex,
		IndexRouter.getIndexList,
		IndexRouter.postIndex,
		IndexRouter.putIndex,
	]);
};

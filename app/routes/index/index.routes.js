const deleteIndex = require('./delete.route');
const getIndex = require('./get.route');
const getIndexList = require('./gets.route');
const postIndex = require('./post.route');
const putIndex = require('./put.route');

const IndexRouter = {
	deleteIndex,
	getIndex,
	getIndexList,
	postIndex,
	putIndex,
};

module.exports = IndexRouter;

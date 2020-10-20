const { isDev } = require('./utils');

const taskTarget = isDev ? 'build' : 'tmp';

const config = {
	port: process.env.PORT || 3000,
	baseUrl: './',
	static: '/static',
};

module.exports = { taskTarget, config };

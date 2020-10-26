const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const isDev = args.development;
const taskTarget = isDev ? 'dist' : 'tmp';

const config = {
	port: process.env.PORT || 3000,
	baseUrl: './',
	static: '/static',
};

module.exports = { config, isDev, taskTarget };

const { path } = require('./utils');

const rootConfig = path.resolve(__dirname);
const root = path.resolve(__dirname, '..');

const paths = {
	slashNormalize(str) {
		const isExtendedLengthPath = /^\\\\\?\\/.test(str);
		const hasNonAscii = /[^\u0000-\u0080]+/.test(str); // eslint-disable-line no-control-regex

		if (isExtendedLengthPath || hasNonAscii) {
			return str;
		}

		return str.replace(/\\/g, '/');
	},

	root() {
		return path.join(this._root, ...arguments);
	},

	tasks() {
		return path.join(this._tasks, ...arguments);
	},

	app() {
		return path.join(this._app, ...arguments);
	},

	public() {
		return path.join(this._public, ...arguments);
	},

	generators() {
		return path.join(this._generators, ...arguments);
	},

	views() {
		return path.join(this._views, ...arguments);
	},

	components() {
		return path.join(this._components, ...arguments);
	},

	server() {
		return path.join(this._server, ...arguments);
	},

	_root: root,
	_config: __dirname,
	_tasks: path.join(rootConfig, 'gulp', 'tasks'),
	_webpack: path.join(rootConfig, 'webpack'),
	_app: path.join(root, 'app'),
	_generators: path.join(root, 'app', 'generators'),
	_public: path.join(root, 'app', 'public'),
	_routes: path.join(root, 'app', 'routes'),
	_views: path.join(root, 'app', 'views'),
	_components: path.join(root, 'app', '@YEB-COMPONENTS'),
	_server: path.join(root, 'app', 'server'),
};

module.exports = { paths };

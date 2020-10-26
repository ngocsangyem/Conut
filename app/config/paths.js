const path = require('path');

const rootConfig = path.resolve(__dirname, '..');
const root = path.resolve(__dirname, '..', '..');

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

	mainComponents() {
		return path.join(this._mainComponents, ...arguments);
	},

	components() {
		return path.join(this._components, ...arguments);
	},

	server() {
		return path.join(this._server, ...arguments);
	},

	_root: root,
	_config: __dirname,
	_tasks: path.join(root, 'build', 'gulp', 'tasks'),
	_webpack: path.join(root, 'build', 'webpack'),
	_app: path.join(rootConfig),
	_generators: path.join(rootConfig, 'generators'),
	_public: path.join(rootConfig, 'public'),
	_routes: path.join(rootConfig, 'routes'),
	_views: path.join(rootConfig, 'views'),
	_mainComponents: path.join(rootConfig, '@YEB-COMPONENTS'),
	_components: path.join(rootConfig, '@COMPONETS'),
	_server: path.join(rootConfig, 'server'),
};

module.exports = { paths };

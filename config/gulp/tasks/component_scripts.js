const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');

const {
	WebpackComponentConfig,
} = require('../../webpack/webpack.component.config');

const { task, src, dest, plugins, reportError } = require('../../utils');
const { paths } = require('../../paths');

task('component:scripts', () => {
	return src(paths.components('views/**/*.js'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(named())
		.pipe(webpackStream(WebpackComponentConfig, webpack, function () {}))
		.pipe(dest('@COMPONETS/js'));
});

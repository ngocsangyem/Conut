const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');

const { glob, task, src, dest, path, paths, args } = require('../../utils');
const { WebpackConfig } = require('../../webpack/webpack.config');

const getEntry = () => {
	const files = {};

	glob.sync()
		.filter((file) => /\.(js)$/i.test(file))
		.map((file) => {
			files[path.basename(path.dirname(file))] = `${file}`;
		});

	return files;
};

task('scripts', (done) => {
	return src(
		[paths.views('pages/**/*.js'), `!${paths._views}/{**/_*,**/_*/**}`],
		{
			allowEmpty: true,
		}
	)
		.pipe(named())
		.pipe(webpackStream(WebpackConfig, webpack, function () {}))
		.pipe(dest(paths.public('js')));
});

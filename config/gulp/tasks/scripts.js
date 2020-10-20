const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const { glob, task, src, dest, path } = require('../../utils');
const { paths } = require('../../paths');
const { WebpackConfig } = require('../../webpack/webpack.config');

const getEntry = () => {
	const files = {};

	glob.sync(paths.views('**/*.js'))
		.filter((file) => /\.(js)$/i.test(file))
		.map((file) => {
			files[path.basename(path.dirname(file))] = `${file}`;
		});

	return files;
};

task('scripts', (done) => {
	return src('.', { allowEmpty: true })
		.pipe(
			webpackStream(
				{
					...WebpackConfig,
					entry: getEntry(),
					output: {
						filename: '[name].js',
					},
				},
				webpack,
				function () {}
			)
		)
		.pipe(dest(paths.public('js')));
});

import webpackStream from 'webpack-stream';
import webpack from 'webpack';

import { glob, task, src, dest, path } from '../../utils';
import { paths } from '../../paths';
import { WebpackConfig } from '../../webpack/webpack.config';

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

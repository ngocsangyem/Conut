import webpackstream from 'webpack-stream';
import webpack from 'webpack';

import { task, src, dest } from '../../utils';
import { paths } from '../../paths';
import { WebpackServerConfig } from '../../webpack/webpack.server.config';

task('server', (done) => {
	return src('.', { allowEmpty: true })
		.pipe(
			webpackstream(
				{
					...WebpackServerConfig,
					entry: { server: paths.server('server.dev.js') },
					output: {
						filename: '[name].js',
					},
				},
				webpack,
				function () {}
			)
		)
		.pipe(dest(paths._app));
});

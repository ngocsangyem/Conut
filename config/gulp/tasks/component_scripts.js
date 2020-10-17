import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import named from 'vinyl-named';

import { WebpackComponentConfig } from '../../webpack/webpack.component.config';

import { task, src, dest, plugins, reportError } from '../../utils';
import { paths } from '../../paths';

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

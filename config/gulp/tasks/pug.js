import {
	task,
	src,
	dest,
	reportError,
	browserSync,
	plugins,
} from '../../utils';
import { paths } from '../../paths';

task('pug:compile', () => {
	return src(paths.components('**/*.pug'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(
			plugins.pug({
				pretty: '\t',
			})
		)
		.pipe(
			plugins.rename(function (path) {
				path.dirname = '';
			})
		)
		.pipe(dest('@COMPONETS/'))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

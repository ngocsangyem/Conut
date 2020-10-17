import pngquant from 'imagemin-pngquant';

import {
	task,
	src,
	dest,
	plugins,
	parallel,
	series,
	reportError,
} from '../../utils';
import { paths } from '../../paths';

const imagesDest = paths.root('@COMPONETS/images/');
const fontsDest = paths.root('@COMPONETS/fonts/');

task('copy:images', () => {
	return src([
		`${paths.public('images/**/*.{jpg,jpeg,gif,svg,png}')}`,
		`!${paths.public('images/uploads/**/*')}`,
	])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(plugins.changed(imagesDest))
		.pipe(
			plugins.imagemin(
				[
					plugins.imagemin.mozjpeg({ progressive: true }),
					plugins.imagemin.svgo({
						plugins: [{ removeViewBox: false }],
					}),
				],
				{ use: [pngquant({ speed: 10 })] }
			)
		)
		.pipe(dest(imagesDest));
});

task('copy:fonts', () => {
	return src([`${paths.public('fonts/**/*')}`])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(plugins.changed(fontsDest))
		.pipe(dest(fontsDest));
});

task('copy:pug', () => {
	return src([
		paths.components('**/*.pug'),
		`!${paths.components('views/**/*.pug')}`,
	])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest('@COMPONETS/template/'));
});

task('copy:js', () => {
	return src(paths.components('**/*.js'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest('@COMPONETS/template/'));
});

task('copy:scss', () => {
	return src(paths.components('**/*.scss'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest('@COMPONETS/template/'));
});

task('copy:vendor:css', () => {
	return src(paths.public('vendor/css/**/*.css'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest('@COMPONETS/css/'));
});

task(
	'copy',
	series(
		'copy:pug',
		'copy:js',
		'copy:scss',
		parallel('copy:images', 'copy:fonts', 'copy:vendor:css')
	)
);

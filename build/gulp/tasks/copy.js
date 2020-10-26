const pngquant = require('imagemin-pngquant');

const {
	task,
	src,
	dest,
	plugins,
	parallel,
	series,
	reportError,
	paths,
} = require('../../utils');

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
		.pipe(plugins.changed(paths.components('images')))
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
		.pipe(dest(paths.components('images')));
});

task('copy:fonts', () => {
	return src([`${paths.public('fonts/**/*')}`])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(plugins.changed(paths.components('fonts')))
		.pipe(dest(paths.components('fonts')));
});

task('copy:pug', () => {
	return src([
		paths.mainComponents('**/*.pug'),
		`!${paths.mainComponents('views/**/*.pug')}`,
	])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest(paths.components('template')));
});

task('copy:js', () => {
	return src(paths.mainComponents('**/*.js'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest(paths.components('template')));
});

task('copy:scss', () => {
	return src(paths.mainComponents('**/*.scss'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest(paths.components('template')));
});

task('copy:vendor:css', () => {
	return src(paths.public('vendor/css/**/*.css'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(dest(paths.components('css')));
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

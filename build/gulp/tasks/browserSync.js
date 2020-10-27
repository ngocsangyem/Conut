const {
	task,
	args,
	browserSync,
	taskTarget,
	config,
	paths,
	series,
} = require('../../utils');
const nodemon = require('gulp-nodemon');

task('nodemon', function (cb) {
	var started = false;

	return nodemon({
		script: paths.app('server.js'),
		ignore: ['gulpfile.babel.js', 'node_modules/'],
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});

task(
	'browserSync',
	series('nodemon', function () {
		browserSync.init(null, {
			proxy: 'http://localhost:3000',
			files: [paths.public('**/*')],
			port: 5000,
		});
	})
);

import {
	path,
	glob,
	KarmaServer,
	task,
	series,
	parallel,
	paths,
} from './build/utils';

glob.sync(paths.tasks('**/*.js'))
	.filter(function (file) {
		return /\.(js)$/i.test(file);
	})
	.map(function (file) {
		require(file);
	});

task(
	'dev',
	series(
		'clean',
		parallel(
			'styles',
			'scripts',
			'component:styles',
			'component:pug:view',
			'component:pug:block',
			'copy',
			'assets',
			'component:scripts'
		),
		'watch',
		'browserSync'
	)
);

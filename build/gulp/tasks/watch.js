const { watch, series, parallel, args, task, paths } = require('../../utils');

task('watch', (done) => {
	if (!args.production) {
		watch([paths.views('**/*.scss')], parallel('styles', 'copy:scss'));

		watch([paths.views('**/*.js')], parallel('scripts', 'copy:js'));

		watch(
			[paths.mainComponents('**/*.pug')],
			parallel('component:pug:view', 'component:pug:block')
		);

		watch([paths.mainComponents('**/assets/**/*')], parallel('assets'));

		watch([paths.public('**/*.css')], parallel('copy:vendor:css'));

		watch(
			[paths.public('**/*.{jpg,jpeg,gif,svg,png}')],
			parallel('copy:images')
		);

		watch([paths.public('fonts/**/*')], parallel('copy:fonts'));
	}
	done();
});

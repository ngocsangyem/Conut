const { watch, series, parallel, args, task } = require('../../utils');
const { paths } = require('../../paths');

task('watch', (done) => {
	if (!args.production) {
		watch([paths.views('**/*.scss')], parallel('styles', 'copy:scss'));

		watch([paths.views('**/*.js')], parallel('scripts', 'copy:js'));

		watch(
			[paths.mainComponents('**/*.pug')],
			parallel('pug:compile', 'copy:pug')
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

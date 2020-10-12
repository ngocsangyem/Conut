import { watch, series, parallel, args, task } from '../../utils';
import { paths } from '../../paths';

task('watch', (done) => {
	if (!args.production) {
		watch([paths.views('**/*.scss')], series('styles'));
		watch([paths.views('**/*.js')], series('scripts'));
	}
	done();
});

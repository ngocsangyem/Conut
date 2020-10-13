import { task, args, browserSync } from '../../utils';
import { taskTarget, config } from '../../config';

task('browserSync', () => {
	browserSync.init({
		open: args.open ? 'local' : false,
		port: config.port || 3000,
		server: {
			baseDir: taskTarget,
			routes: (() => {
				let routes = {};

				// Map base URL to routes
				routes[config.baseUrl] = taskTarget;

				return routes;
			})(),
		},
	});
});

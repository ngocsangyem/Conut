import { from } from 'webpack-sources/lib/CompatSource';
import { isDev } from './utils';

const taskTarget = isDev ? 'build' : 'tmp';

export default {
	paths: {
		base: taskTarget,
		sources: {
			app: 'app',
			components: '@YEB-COMPONENTS',
			generators: 'generators',
			helpers: 'helpers',
			public: 'public',
			images: 'images',
			server: 'server',
			views: 'views',
			markup: 'app/@YEB-COMPONENTS/**/*.pug',
			scripts: {
				root: 'app/views/**/*.js',
				all: 'app/@YEB-COMPONENTS/**/*.js',
			},
			styles: {
				root: 'app/views/**/*.scss',
				all: 'app/@YEB-COMPONENTS/**/*.scss',
			},
		},
		destinations: {
			css: taskTarget + 'css/',
			js: taskTarget + 'js/',
		},
	},
};

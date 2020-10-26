const {
	task,
	src,
	dest,
	args,
	reportError,
	browserSync,
	plugins,
	paths,
} = require('../../utils');

const Fiber = require('fibers');
const cssDeclarationSorter = require('css-declaration-sorter');
const cssnano = require('cssnano');
const combineMediaQueries = require('postcss-combine-media-query');
const sortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer');

const postCssPlugins = [
	autoprefixer({
		grid: true,
	}),
	cssDeclarationSorter({
		order: 'concentric-css',
	}),
	combineMediaQueries(),
	sortMediaQueries(),
	cssnano(),
];

task('styles', () => {
	return src([
		paths.views('**/*.scss'),
		`!${paths.views('{**/_*,**/_*/**}')}`,
	])
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(
			plugins.if(
				!args.production,
				plugins.sourcemaps.init({
					loadMaps: true,
				})
			)
		)
		.pipe(
			plugins.sass({
				fiber: Fiber,
				outputStyle: 'expanded',
				precision: 10,
			})
		)
		.pipe(plugins.if(args.production, plugins.postcss(postCssPlugins)))
		.pipe(
			plugins.rename(function (path) {
				path.dirname = '';
			})
		)
		.pipe(plugins.if(!args.production, plugins.sourcemaps.write('./')))
		.pipe(dest(paths.public('css')))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

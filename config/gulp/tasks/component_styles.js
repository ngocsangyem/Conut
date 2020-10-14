import {
	task,
	src,
	dest,
	args,
	reportError,
	browserSync,
	plugins,
} from '../../utils';
import { paths } from '../../paths';

import Fiber from 'fibers';
import cssDeclarationSorter from 'css-declaration-sorter';
import cssnano from 'cssnano';
import combineMediaQueries from 'postcss-combine-media-query';
import sortMediaQueries from 'postcss-sort-media-queries';
import autoprefixer from 'autoprefixer';

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

task('component:styles', () => {
	return (
		src(paths.components('**/*.scss'))
			.pipe(
				plugins.plumber({
					errorHandler: reportError,
				})
			)
			.pipe(
				plugins.sass({
					fiber: Fiber,
					outputStyle: 'expanded',
					precision: 10,
				})
			)
			// .pipe(plugins.if(args.production, plugins.postcss(postCssPlugins)))
			.pipe(
				plugins.rename(function (path) {
					path.dirname = '';
				})
			)
			.pipe(dest(paths.root('@COMPONETS/css')))
			.pipe(
				browserSync.reload({
					stream: true,
				})
			)
	);
});

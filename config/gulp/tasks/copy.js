import pngquant from 'imagemin-pngquant';

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

const imagesDest = paths.root('@COMPONETS/images');
const fontsDest = paths.root('@COMPONETS/fonts');

task('copy:images', () => {
	src([
		`${paths.public('images/**/*.{jpg,jpeg,gif,svg,png}')}`,
		`!${paths.public('images/uploads/**/*')}`,
	])
		.pipe(plugins.changed(imagesDest))
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
		.pipe(dest(imagesDest));
});

task('copy:fonts', () => {
	src([`${paths.public('fonts/**/*')}`])
		.pipe(plugins.changed(fontsDest))
		.pipe(dest(fontsDest));
});

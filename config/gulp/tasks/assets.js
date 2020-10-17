import { task, src, dest, path, plugins, reportError } from '../../utils';
import { paths } from '../../paths';

task('assets', () => {
	return src(paths.components('**/assets/**/*'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(
			dest((file) => {
				const basename = path.basename(file.path);
				const extname = path.extname(basename);

				if (extname === '.js') {
					file.path = path.join(file.base, basename);
					return paths.root('@COMPONETS/js');
				} else if (extname === '.css') {
					file.path = path.join(file.base, basename);
					return paths.root('@COMPONETS/css');
				} else {
					let array = path
						.relative(paths._components, file.path)
						.split(path.sep)
						.slice(1)
						.filter((f) => f !== 'assets');
					let asset = [array[0]].concat(array.slice(1));

					asset = asset.join(path.sep);
					file.path = path.join(file.base, asset);

					return paths.root('@COMPONETS/images');
				}
			})
		);
});

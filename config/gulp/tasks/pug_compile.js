import {
	task,
	src,
	dest,
	reportError,
	browserSync,
	plugins,
	path,
} from '../../utils';
import { paths } from '../../paths';

import modifyFile from 'gulp-modify-file';

const htmlTemplate = (content, title) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>${title}</title>
		</head>
		<body>
			${content}
		</body>
	</html>
	`;
};

task('pug:compile', () => {
	return src(paths.components('**/*.pug'))
		.pipe(
			plugins.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(
			plugins.pug({
				pretty: '\t',
			})
		)
		.pipe(
			modifyFile((content, filePath, file) => {
				var extension = path.extname(filePath);
				var fileName = path.basename(filePath, extension);
				return htmlTemplate(content, fileName);
			})
		)
		.pipe(
			plugins.rename(function (path) {
				path.dirname = '';
			})
		)
		.pipe(dest('@COMPONETS/'))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

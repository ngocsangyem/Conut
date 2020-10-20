const {
	task,
	src,
	dest,
	reportError,
	browserSync,
	plugins,
	path,
} = require('../../utils');
const { paths } = require('../../paths');

const modifyFile = require('gulp-modify-file');

const htmlTemplate = (content, title, assetName) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="./css/codyhouse.css">
			<link rel="stylesheet" href="./css/${assetName}.css">
			<title>${title}</title>
		</head>
		<body>
			${content}
			<script src="./js/${assetName}.js"></script>
		</body>
	</html>
	`;
};

task('pug:compile', () => {
	return src(paths.components('views/**/*.pug'))
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
				const extension = path.extname(filePath);
				const fileName = path.basename(filePath, extension);
				const assetName = fileName.split(/-{2,}/)[0];
				const parseContent = content.replace(
					/(,|'|"|`| )@([\w-]+)/gi,
					'"images'
				);
				return htmlTemplate(parseContent, fileName, assetName);
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

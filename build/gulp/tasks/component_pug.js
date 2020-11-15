const {
	task,
	src,
	dest,
	reportError,
	browserSync,
	plugins,
	path,
	paths,
} = require('../../utils');

const modifyFile = require('gulp-modify-file');

const htmlTemplateView = (content, title, assetName) => {
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
const htmlTemplateBlock = (content, assetName) => {
	return `
	<link rel="stylesheet" href="./css/${assetName}.css">
	${content}
	<script src="./js/${assetName}.js"></script>
	`;
};

task('component:pug:view', () => {
	return src(paths.mainComponents('views/**/*.pug'))
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
				return htmlTemplateView(parseContent, fileName, assetName);
			})
		)
		.pipe(
			plugins.rename(function (path) {
				path.dirname = '';
			})
		)
		.pipe(dest(paths._components))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

task('component:pug:block', () => {
	return src(paths.mainComponents('views/**/*.pug'))
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
				const parseContent = content.replace(/@([\w-]+)/gi, 'images');
				return htmlTemplateBlock(parseContent, assetName);
			})
		)
		.pipe(dest(paths.components('components')))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

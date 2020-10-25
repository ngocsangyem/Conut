const multer = require('multer');
const { paths } = require('../../config/paths');
const toSnakeCase = require('../helpers/toSnakeCase');

const Storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, paths.public('images/uploads'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix =
			Date.now() +
			'-' +
			Math.round(Math.random() * 1e9) +
			toSnakeCase(file.originalname);
		cb(null, file.fieldname + '-' + uniqueSuffix);
	},
});

const upload = multer({ storage: Storage });

module.exports = { upload };

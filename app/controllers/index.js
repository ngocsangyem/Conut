const generateKey = require('../helpers/generateKey');

module.exports = {
	renderIndex: function (req, res) {
		res.render('index', {
			key: generateKey(10),
			memory: process.memoryUsage(),
			cpu: process.cpuUsage(),
			platform: process.platform,
			node: process.versions,
		});
	},
};

const generateID = require('../helpers/generateId');

module.exports = {
	renderIndex: function (req, res) {
		res.render('index', {
			key: generateID(10),
			memory: process.memoryUsage(),
			cpu: process.cpuUsage(),
			platform: process.platform,
			node: process.versions,
		});
	},
};

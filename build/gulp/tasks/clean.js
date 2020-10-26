const del = require('del');

const { task, paths } = require('../../utils');

task('clean', (done) => {
	return del([paths._components]);
});

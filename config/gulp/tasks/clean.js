const del = require('del');

const { task } = require('../../utils');
const { paths } = require('../../paths');

task('clean', (done) => {
	return del([paths._components]);
});

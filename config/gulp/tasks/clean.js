import del from 'del';

import { task } from '../../utils';
import { paths } from '../../paths';

task('clean', (done) => {
	del([paths.root('@COMPONETS')]);
	done();
});

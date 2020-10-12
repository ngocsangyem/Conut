import { isDev } from './utils';

const taskTarget = isDev ? 'build' : 'tmp';

const config = {
	port: 9000,
	baseUrl: './',
};

export { taskTarget, config };

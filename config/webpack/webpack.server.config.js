import { isDev } from '../utils';
import nodeExternals from 'webpack-node-externals';

const WebpackServerConfig = {
	mode: isDev ? 'development' : 'production',
	target: 'node',
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false, // and __filename return blank or /
	},
	externals: [nodeExternals()], // Need this to avoid error when working with Express
	module: {
		rules: [
			{
				// Transpiles ES6-8 into ES5
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};

export { WebpackServerConfig };
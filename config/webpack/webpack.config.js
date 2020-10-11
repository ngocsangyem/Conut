import TerserPlugin from 'terser-webpack-plugin';

import { path, isDev, glob } from '../utils';
import { paths } from '../paths';

// const getEntry = () => {
// 	const files = {};

// 	glob.sync(paths.views('**/*.js'))
// 		.filter((file) => /\.(js)$/i.test(file))
// 		.map((file) => {
// 			files[path.basename(path.dirname(file))] = `${file}`;
// 		});

// 	return files;
// };

const WebpackConfig = {
	devtool: isDev ? 'eval-source-map' : false,
	mode: isDev ? 'development' : 'production',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [],
};

if (!isDev) {
	WebpackConfig.plugins.push(
		new TerserPlugin({
			cache: true,
			parallel: true,
			extractComments: false,
		})
	);
}

export { WebpackConfig };

const TerserPlugin = require('terser-webpack-plugin');
const { paths } = require('../utils');

const { isDev } = '../utils';

const WebpackConfig = {
	// devtool: isDev ? 'eval-source-map' : false,
	// mode: isDev ? 'development' : 'production',
	devtool: 'eval-source-map',
	mode: 'development',
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
	resolve: {
		alias: {
			'@components': paths.views('_layouts/components'),
			'@store': paths.views('_store'),
			'@helpers': paths.views('_helpers'),
		},
	},
};

// if (!isDev) {
// 	WebpackConfig.plugins.push(
// 		new TerserPlugin({
// 			cache: true,
// 			parallel: true,
// 			extractComments: false,
// 		})
// 	);
// }

module.exports = { WebpackConfig };

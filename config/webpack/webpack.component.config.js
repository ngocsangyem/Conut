const TerserPlugin = require('terser-webpack-plugin');

const WebpackComponentConfig = {
	mode: 'production',
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
	plugins: [
		new TerserPlugin({
			cache: true,
			parallel: true,
			extractComments: false,
		}),
	],
};

module.exports = { WebpackComponentConfig };

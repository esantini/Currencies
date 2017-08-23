
var path = require('path'),
	webpack = require('webpack'),
	WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
	entry: './src/client/index.tsx',
	output: {
		filename: 'bundle.js',
		publicPath: 'build/public',
		path: path.resolve('build/public')
	},

	devtool: 'source-map',
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
		// ,modulesDirectories: ['src', 'node_modules']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			},
			{
				test: /\.less$/,
				loader: 'less-loader'
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {

				}
			}
		],
		loaders: [
			{
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new WebpackNotifierPlugin({ alwaysNotify: false })
	],
	stats: {
		warnings: true,
		moduleTrace: false // Omit stack trace
	},
	watch: true
}

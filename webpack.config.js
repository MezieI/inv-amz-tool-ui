const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: { index: path.resolve(__dirname, 'app', 'index.js') },
	mode: 'development',
	output: {
		path: __dirname + '/build',
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './app/index.html',
		}),
	],

	devServer: {
		contentBase: path.resolve(__dirname, './app'),
		publicPath: '/',
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
};

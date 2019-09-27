var path = require("path");
const webpack = require('webpack')
module.exports = {
	mode: "development",
	devtool: 'source-map',
	entry: {
		index: './index',
		entry: './entry',
	},
	optimization: {
		// runtimeChunk: 'single'
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: './dist/',
		filename: "[name].js",
		chunkFilename: "[name].js",
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
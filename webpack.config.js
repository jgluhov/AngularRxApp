'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + '/src',

	entry: './scripts/app',

	output: {
		path: __dirname + '/public',
		filename: './js/bundle.js'
	},

	devtool: NODE_ENV === 'development' ? '#cheap-inline-module-source-map' : null,

	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel?presets[]=es2015']
			},
			{
				test: /\.jade$/,
				exclude: /node_modules/,
				loader: 'jade'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg)$/,
				loader: 'file?name=./fonts/[name].[ext]'
			}
		],
		noParse: [
			/angular\/angular.js/
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: './templates/index.jade'
		})
	],

	watch: true
};

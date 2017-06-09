/*!
 * webpack config
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/09
 * since: 0.0.1
 */
'use strict';

const path = require('path');

const webpack = require('webpack');

const pkg = require('./package.json');

const basePath = __dirname;
const prod = process.argv.indexOf('-p') >= 0 || process.argv.indexOf('--optimize-minimize') >= 0;
const env = prod ? 'production' : 'development';
const min = prod ? '.min' : '';

let webpackConfig = {
	entry: './index',
	output: {
		path: path.resolve('dist'),
		filename: `peppa.utils${min}.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['es3ify-loader', 'babel-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({minimize: true}),
	],
};

if(prod) {
	webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
		comments: false,
		compress: {warnings: false},
		ie8: true,
		sourceMap: true,
	}));
}

webpackConfig.plugins.push(new webpack.BannerPlugin(`${pkg.name} - ${pkg.description}; ${pkg.author}; v${pkg.version}; ${pkg.homepage}`));

module.exports = webpackConfig;

const nameModule = 'VGNav';

const outputPaths = ['./build', './public/assets/build']

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = outputPaths.map(outputPath => {
	return (env, argv) => {
		let NODE_ENV = argv.mode || 'development',
			args = {
				name: nameModule.trim().toLowerCase(),
				filename: {},
				devtool: 'inline-cheap-module-source-map',
				watch: false,
				watchOptions: {
					aggregateTimeout: 100
				}
			};

		if (NODE_ENV === 'development') {
			args.filename = {
				js: args.name + '.js',
				css: args.name + '.css',
			}
			args.watch = true;
		} else if (NODE_ENV === 'production') {
			args.filename = {
				js: args.name + '.js',
				css: args.name + '.css',
			}
			args.devtool = 'source-map'
		}

		return  {
			entry: './index.js',
			output: {
				path: path.resolve(__dirname, outputPath),
				filename: args.filename.js,
				library: 'vg'
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						use: 'babel-loader',
					},
					{
						test: /\.(scss|css)$/,
						use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
					}
				],
			},
			plugins: [
				new webpack.DefinePlugin({
					NODE_ENV: JSON.stringify(NODE_ENV),
					LANG: JSON.stringify('ru'),
				}),
				new MiniCssExtractPlugin({
					filename: args.filename.css,
				}),
			],
			devtool: args.devtool,
			watch: args.watch,
			watchOptions: args.watchOptions
		};
	}
});

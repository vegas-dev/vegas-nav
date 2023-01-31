const path = require('path');

module.exports = {
	entry: [
		__dirname + '/src/app.js',
		__dirname + '/src/app.scss'
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: '', name: 'app.css'}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins: [],
}
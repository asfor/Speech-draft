module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			// {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name].[ext]'},
			{test: /\.(sass|scss)$/, loader: 'style!css!sass'},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {presets: ['es2015', 'react']}
			}
		]
	},
	devServer: {
		contentBase: "./",
		colors: true,
		historyApiFallback: true,
		inline: true
	}
}
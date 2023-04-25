const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin }   = require('clean-webpack-plugin');

const isProd = (process.env.NODE_ENV == 'production');

module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '../build')
	},
	mode: (isProd) ? 'production' : 'development',
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'esbuild-loader',
			options: {
	          // JavaScript version to compile to
	          target: 'es2015'
	        }
		},{
			test: /\.(sa|sc|c)ss$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: process.env.NODE_ENV === 'development',
						reloadAll: true
					},
				},
				'css-loader',
				'postcss-loader',
			],
		},{
			test: /\.(png|jpg|jpeg|gif|svg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets/images/'
					}
				}
			]
		}]
	},resolve: {
        alias: {
            '@scss': path.resolve(__dirname, '../src/styles/scss'),
            '@img': path.resolve(__dirname, '../src/assets/images'),
            '@': path.resolve(__dirname, '../src')
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new MiniCssExtractPlugin({
            filename: (isProd) ? `style.bundle.css?v=11`  : 'style.[chunkhash].css' 
        }),
		new HtmlWebpackPlugin({
			title: 'react with webpack-4 and babel-7 kick starter pro',
			template: './src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		new CopyWebpackPlugin([{
            from:'./src/assets/images',
            to:'assets/images'
		}]),
		new CleanWebpackPlugin()
	]
}
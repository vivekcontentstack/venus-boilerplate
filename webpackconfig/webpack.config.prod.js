const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.common.js');
module.exports = merge(webpackBaseConfig, {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
              cache: true,
            }),
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
        mergeDuplicateChunks: true,
        splitChunks: {
            chunks: 'all',
        }
    }
})
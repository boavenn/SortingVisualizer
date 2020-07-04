const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contentHash].js'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
             new TerserPlugin({
                 parallel: true,
                 extractComments: false
             })
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        })
    ]
});

module.exports = config;
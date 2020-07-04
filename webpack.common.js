
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
};

module.exports = config;
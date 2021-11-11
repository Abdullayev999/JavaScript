const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '.',
        hot: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.s[ca]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg$/, use: ['file-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
        ]
    }
};
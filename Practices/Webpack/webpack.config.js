const path = require('path'); //podklyucaetsa model path
//gde naxodyatsa funkciya rabota s putyami

module.exports = {
    entry: './src/index.js', //iwtet osnovnoy js
    output: { // kuda zakinut rezultat
        path: path.resolve(__dirname, 'dist'), //beret tekuwyu papku i prikleivaet k ney dist
        filename: 'main.js',
    },
    devServer: {
        //contentBase 
        static: '.',
        hot: true,
    },
    mode: 'none',

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg$/, use: ['file-loader'] },
            { test: /\.xml$/, use: ['xml-loader'] },
            { test: /\.csv$/, use: ['csv-loader'] }
        ]
    }
};
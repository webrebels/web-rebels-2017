const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let cssLoader;
if (process.env.NODE_ENV !== 'production') {
    cssLoader = {
        test: /\.scss$/,
        include: /.scss$/,
        loader: ('style-loader!css-loader!postcss-loader!sass-loader'),
    };
} else {
    cssLoader = {
        test: /\.scss$/,
        include: /.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
    };
}

module.exports = {
    entry: './src/scss/main.scss',
    output: {
        path: './public',
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { context: './src/img/', from: '**/*', to: 'img' },
        ]),
    ],

    module: {
        loaders: [cssLoader],
    },
};

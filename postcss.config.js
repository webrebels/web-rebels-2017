module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'last 3 versions',
                'not IE < 11',
            ],
        }), /* eslint global-require: 0 */
    ],
};

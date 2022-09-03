const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
                options: {},
            },
        ],
    },
    plugins: [
        new NodemonPlugin({
            watch: path.resolve('./dist/js')
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

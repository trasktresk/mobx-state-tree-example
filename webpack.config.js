const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

const browserConfig = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'common.bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: ['node_modules'],
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015', 'react'],
                    plugins: [
                        "transform-decorators-legacy"
                    ]
                }
            }
        ]
    },
    plugins: (function() {
        const plugins = [];

        plugins.push(new webpack.NoEmitOnErrorsPlugin());

        if (isProduction) {
            plugins.push(new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }));
            plugins.push(new UglifyJSPlugin());
        }

        return plugins;
    })(),
    resolve: {
        modules: ['node_modules'],
        alias: {
            Shared: path.join(__dirname, './src/shared'),
            Components: path.join(__dirname, './src/shared/components'),
            Containers: path.join(__dirname, './src/shared/containers'),
            Models: path.join(__dirname, './src/shared/models'),
        }
    },
    devtool: isProduction ? false : 'source-map'
};

const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ['env', 'es2015', 'react'],
                    plugins: [
                        "transform-decorators-legacy"
                    ]
                }
            }
        ]
    },
    plugins: (() => {
        const plugins = [];

        if (isProduction) {
            plugins.push(new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }));
            plugins.push(new UglifyJSPlugin());
        }

        return plugins;
    })(),
    resolve: {
        modules: ['node_modules'],
        alias: {
            Shared: path.join(__dirname, './src/shared'),
            Components: path.join(__dirname, './src/shared/components'),
            Containers: path.join(__dirname, './src/shared/containers'),
            Models: path.join(__dirname, './src/shared/models'),
        }
    },
};

module.exports = [browserConfig, serverConfig];
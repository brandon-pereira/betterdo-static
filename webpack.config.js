const config = require('./config');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');

const getPlugins = () => {
    const plugins = [
        new webpack.optimize.LimitChunkCountPlugin({
            minChunkSize: 10000,
            maxChunks: 1
        }),
        new webpack.DefinePlugin({
            // scope hoisting
            PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
        })
    ];

    if (!config.isProduction) {
        plugins.push(new webpack.SourceMapDevToolPlugin());
    } else {
        plugins.push(
            new OfflinePlugin({
                ServiceWorker: {
                    output: '../sw.js',
                    events: true
                },
                externals: ['/']
            })
        );
    }

    return plugins;
};

module.exports = {
    mode: config.isProduction ? 'production' : 'development',
    devtool: config.isProduction ? false : 'eval-source-map',
    entry: config.paths.src.scripts,
    output: {
        publicPath: 'scripts/', // relative path
        filename: config.naming.scripts
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                'add-module-exports', // export default will allow you to import without typing .default
                                '@babel/plugin-syntax-dynamic-import'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-preset-env')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: getPlugins()
};

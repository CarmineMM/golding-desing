module.exports = (env, argv) => {
    const path = require('path');
    const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

    /**
     * Return Webpack
     */
    return {
        // Establece los source-map o la inexistencia de Mapas en el Bundle
        devtool: argv.mode === 'development' ? 'source-map' : false,
        mode: argv.mode,

        // Entry - Output
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js',
            publicPath: ''
        },

        // Optimizations
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        // cacheGroupKey here is `commons` as the key of the cacheGroup
                        name(module, chunks, cacheGroupKey) {
                            let moduleFileName  = module.identifier().split('\\');
                            moduleFileName = moduleFileName[moduleFileName.length - 1];
                            moduleFileName = moduleFileName.substring(0, moduleFileName.length - 3);

                            return moduleFileName + '.min';
                        },
                        chunks: 'all'
                    }
                }
            }
        },

        module: {
            rules: [
                // Javascript
                {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },

                // Stylesheets
                {
                    test: /\.(c|sc|sa)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: argv.mode === 'development' ? 'css/golding.css' : 'css/golding.min.css',
            })
        ]
    }
}
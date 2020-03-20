const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (market) => {
  const env = dotenv.config({path: './.env'}).parsed || {};
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {}),
  PATHS = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  };
  const manifest = require('./public/manifest.json');
  return {
    entry: './src/index.tsx',
    mode: 'production',
    devtool: '',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [PATHS.src, 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules/],
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.prod.json'
          }
        },
        {
          test: /\.(gif|png|jpe?g)$/i,
          loader: 'file-loader'
        },
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader']
        // }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        title: 'swapi-apollo',
        template: './public/index.html',
        filename: './index.html',
        favicon: PATHS.public+'/favicon.ico',
      }),
      new WebpackPwaManifest({
        ...manifest,
        filename: 'manifest.json',
        // inject: false,
        includeDirectory: true
      }),
      new ServiceWorkerWebpackPlugin({ entry: './public/sw.js', filename: 'sw.js' })
    ],
    // noParse: /\.production\.min\.js$/,
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // }
  }
};
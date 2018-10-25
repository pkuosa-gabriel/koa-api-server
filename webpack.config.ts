import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  devtool:
    process.env.NODE_ENV === 'production'
      ? 'source-map'
      : '#cheap-module-eval-source-map',
  entry: ['@babel/polyfill', './src/server/index'],
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(ts|js)x?$/,
      },
    ],
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: 'node',
};

export default config;

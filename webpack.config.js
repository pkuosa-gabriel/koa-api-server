const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  // Change to your "entry-point".
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  entry: ['@babel/polyfill', './src/index'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: [nodeExternals()],
};

import path from 'path';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/server/index'],
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
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

//@ts-check

'use strict';

const path = require('path');

// Webpack configuration
module.exports = {
  target: 'node',
	mode: 'production',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), // bundle is stored in dist folder
    filename: 'extension.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'nosources-source-map',
  externals: {
    vscode: 'commonjs vscode'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
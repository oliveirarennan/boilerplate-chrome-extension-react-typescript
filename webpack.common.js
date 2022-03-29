const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    popup: path.resolve(__dirname, 'src/popup/popup.tsx'),
    options: path.resolve(__dirname, 'src/options/options.tsx'),
    background: path.resolve(__dirname, 'src/background/background.ts'),
    contentScript: path.resolve(__dirname, 'src/contentScript/contentScript.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization:{
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        type: 'asset/resource',
        test: /\.(jpg|png|woff|woff2|eot|ttg|svg|gif)$/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/static'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    ...getHtmlPlugins([
      'popup',
      'options',
    ])
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}


function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlWebpackPlugin({
    title: 'React + TypeScript Chrome Extension',
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
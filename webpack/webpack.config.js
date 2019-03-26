const path = require('path')
module.exports = {
  entry: './app/index.js',  //入口文件
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // js文件才使用babel
        test: /\.js$/,
        // 使用哪个 loader
        use: 'babel-loader',
        //不包括路径
        exclude: /node_modules/
      }
    ]
  }
}
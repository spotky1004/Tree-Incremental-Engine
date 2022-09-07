const path = require('path');

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "./index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  devServer: {
    static: {
      directory: ".",
    },
    compress: true,
    port: 9001,
  }
};

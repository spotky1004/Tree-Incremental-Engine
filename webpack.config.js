const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "./tree.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@typings": path.resolve(__dirname, "src/typings/"),
    },
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
      directory: path.join(__dirname, 'demo'),
    },
    compress: true,
    port: 9000,
  }
};

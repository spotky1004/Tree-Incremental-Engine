const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "./sie.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    roots: [path.resolve("./src")],
    alias: {
      "@util-types": path.resolve(__dirname, "../src/types/util.d.ts"),
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

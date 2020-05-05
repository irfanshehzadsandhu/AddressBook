const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "/bundle"),
    filename: "index_bundle.js",
  },
  devServer: {
    inline: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new Dotenv(),
  ],
};

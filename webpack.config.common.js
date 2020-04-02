const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

require("dotenv").config();

const BABEL_CONFIG = {
  presets: ["@babel/env", "@babel/react"],
  plugins: ["@babel/proposal-class-properties"]
};

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "[name].[contenthash].js", // this line is the only difference
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.EnvironmentPlugin(["MAPBOX_TOKEN"]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
          options: BABEL_CONFIG
        }
      }
    ]
  }
};

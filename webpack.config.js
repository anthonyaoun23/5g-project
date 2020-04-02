const resolve = require("path").resolve;
const webpack = require("webpack");

require("dotenv").config();

const BABEL_CONFIG = {
  presets: ["@babel/env", "@babel/react"],
  plugins: ["@babel/proposal-class-properties"]
};

const config = {
  mode: "development",

  entry: {
    app: resolve("./src/app.js")
  },

  output: {
    library: "App"
  },

  module: {
    rules: [
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        include: [resolve(".")],
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: BABEL_CONFIG
          }
        ]
      }
    ]
  },
  plugins: [new webpack.EnvironmentPlugin(["MAPBOX_TOKEN"])]
};

module.exports = config;

const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const pkgJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthgApp": "./src/bootstrap",
      },
      shared: pkgJson.dependencies,
    }),
  ],
  devServer: {
    port: 8082, 
  },
};

module.exports = merge(commonConfig, prodConfig);

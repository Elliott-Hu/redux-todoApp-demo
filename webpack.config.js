var webpack = require("webpack");
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = {
  entry:{
    index:"./index.js",
    vendor:[
      "react",
      "react-dom",
      "react-redux",
      "redux",
    ]
  },
  output:{
    path:"./",
    filename:"[name]"+"dist.js"
  },
  module:{
    loaders:[{
      test:/\.js$/,
      excluce:/node_modules/,
      loader:"babel",
      query:{
        presets:["es2015","stage-2","react"],
      }
    }]
  },
  plugins:[
    new BellOnBundlerErrorPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin()],
  devServer:{
    hot:true,
    inline:true,
  }
}
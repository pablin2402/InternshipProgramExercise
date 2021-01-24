module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  },
   devServer: {
     proxy: 'https://itunes.apple.com/search?term=jack+johnson&limit=25/'
 } 
};

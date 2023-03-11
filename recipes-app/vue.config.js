const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack:{
    resolve: {
      fallback: {
        "process": require.resolve("process/browser")
      }
    },
  },
  transpileDependencies: true
})

//vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/psx-mpc' : '/',
})

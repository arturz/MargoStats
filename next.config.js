// next.config.js 
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})
const withOffline = require('next-offline')

module.exports = withOffline(
  withBundleAnalyzer(
    withCSS({
      cssLoaderOptions: {
        url: false
      }
    })
  )
)
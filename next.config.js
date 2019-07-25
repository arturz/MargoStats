// next.config.js 
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

module.exports = withBundleAnalyzer(
  withCSS({
    cssLoaderOptions: {
      url: false
    }
  })
)
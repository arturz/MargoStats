// next.config.js 
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})
const withOffline = require('next-offline')

const { default: InjectPlugin, ENTRY_ORDER } = require('webpack-inject-plugin')

const withInjection = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options){
    config.plugins = config.plugins || []
    config.plugins.push(
      new InjectPlugin(() => {
        return `console.log('chuj dupa kamieni kupa');`
      }, {
        entryName: 'passive listeners',
        entryOrder: ENTRY_ORDER.First
      })
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config
  }
})

module.exports = withInjection(
  withOffline(
    withBundleAnalyzer(
      withCSS({
        cssLoaderOptions: {
          url: false
        }
      })
    )
  )
)
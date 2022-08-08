const { ConcatSource } = require('webpack-sources')

class BannerPlugin {
  constructor(options) {
    this.banner = options.banner
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('BannerPlugin', (compilation) => {
      compilation.hooks.afterOptimizeAssets.tap('BannerPlugin', (assets) => {
        Object.entries(assets).forEach(([pathname, source]) => {
          compilation.updateAsset(
            pathname,
            new ConcatSource(this.banner + source.source())
          )
        })
      })
    })
  }
}

module.exports = BannerPlugin

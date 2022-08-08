const path = require('path')
const {
  override,
  useBabelRc,
  addDecoratorsLegacy,
  addBundleVisualizer,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  babelInclude,
  fixBabelImports,
  removeModuleScopePlugin
} = require('customize-cra')
const dateFormat = require('dateformat')
const WebpackBarPlugin = require('webpackbar')

const BannerPlugin = require('./compile/banner.webpack')
const SystemConfig = require('./config/system.conf')
const pkg = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

module.exports = override(
  useBabelRc(),
  removeModuleScopePlugin(),
  addDecoratorsLegacy(),
  process.env.REACT_BUNDLE_VISUALIZE === 1 &&
    addBundleVisualizer(
      {
        analyzerMode: 'static',
        reportFilename: 'report.html'
      },
      true
    ),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: SystemConfig.antd.variables
    },
    sourceMap: !isProd
  }),
  addWebpackAlias({
    '@components': path.resolve(__dirname, './components'),
    '@config': path.resolve(__dirname, './config'),
    '@pages': path.resolve(__dirname, './pages'),
    '@store': path.resolve(__dirname, './store')
  }),
  addWebpackPlugin(new WebpackBarPlugin()),
  babelInclude([
    path.resolve(__dirname, 'components'),
    path.resolve(__dirname, 'config'),
    path.resolve(__dirname, 'pages'),
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'store')
  ]),
  fixBabelImports('antd', {
    libraryDirectory: 'lib',
    style: true
  }),
  (config) => {
    if (isProd) {
      // change webpack devtool configuration
      config.devtool = !isProd ? 'cheap-module-source-map' : false

      // disabled css source map file
      config.optimization.minimizer.forEach((plugin) => {
        if (plugin.constructor.name === 'OptimizeCssAssetsWebpackPlugin') {
          plugin.options.cssProcessorOptions = {
            ...plugin.options.cssProcessorOptions,
            map: !isProd
          }
        }
      })

      config.optimization.minimizer.push(
        new BannerPlugin({
          banner: `/*!\n *  @name: ${pkg.name} \n *  @author: ${
            pkg.author
          } \n *  @date: ${dateFormat(
            new Date(),
            'UTC:dddd, mmmm dS, yyyy, h:MM:ss TT'
          )} \n *  @version: ${pkg.version} \n *  @license: ${
            pkg.license
          } \n *  @copyright: ${pkg.copyright} \n */\n`
        })
      )
    }

    return config
  }
)

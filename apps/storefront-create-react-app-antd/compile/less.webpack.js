const fs = require('fs')
const path = require('path')
const paths = require('react-scripts/config/paths')

const useTailwind = fs.existsSync(
  path.join(paths.appPath, 'tailwind.config.js')
)

module.exports =
  (loaderOptions = {}) =>
  (config) => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    const cssLoaderOptions = loaderOptions.cssLoaderOptions || {}
    const lessLoaderOptions = loaderOptions.lessLoaderOptions || {}

    const lessRegex = /\.less$/
    const lessModuleRegex = /\.module\.less$/

    const webpackEnv = process.env.NODE_ENV
    const isEnvDevelopment = webpackEnv === 'development'
    const isEnvProduction = webpackEnv === 'production'
    const shouldUseSourceMap = isEnvProduction
      ? process.env.GENERATE_SOURCEMAP !== 'false'
      : isEnvDevelopment

    // reference from react-scripts
    const getStyleLoaders = (cssOptions, preProcessor) => {
      const postcssPlugins = [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          }
        ]
      ]

      if (useTailwind) {
        postcssPlugins.unshift('tailwindcss')
      } else {
        postcssPlugins.push('postcss-normalize')
      }

      const loaders = [
        isEnvDevelopment && require.resolve('style-loader'),
        isEnvProduction && {
          loader: MiniCssExtractPlugin.loader,
          // css is located in `static/css`, use '../../' to locate index.html folder
          // in production `paths.publicUrlOrPath` can be a relative path
          options: paths.publicUrlOrPath.startsWith('.')
            ? { publicPath: '../../' }
            : {}
        },
        {
          loader: require.resolve('css-loader'),
          options: cssOptions
        },
        {
          // Options for PostCSS as we reference these options twice
          // Adds vendor prefixing based on your specified browser support in
          loader: require.resolve('postcss-loader'),
          options: {
            postcssOptions: {
              // Necessary for external CSS imports to work
              ident: 'postcss',
              config: false,
              plugins: postcssPlugins
            },
            sourceMap: shouldUseSourceMap
          }
        }
      ].filter(Boolean)

      if (preProcessor) {
        // not the same as react-scripts
        loaders.push(preProcessor)
      }

      return loaders
    }

    const lessLoader = {
      loader: require.resolve('less-loader'),
      // not the same as react-scripts
      options: {
        sourceMap: shouldUseSourceMap,
        ...lessLoaderOptions,
        lessOptions: {
          rewriteUrls: 'local',
          ...(lessLoaderOptions.lessOptions || {})
        }
      }
    }

    const defaultCSSLoaderOption = {
      importLoaders: 2,
      sourceMap: shouldUseSourceMap
    }

    const loaders = config.module.rules.find((rule) =>
      Array.isArray(rule.oneOf)
    ).oneOf

    // insert less loader before resource loader
    loaders.splice(
      loaders.length - 1,
      0,
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(
          { ...defaultCSSLoaderOption, ...cssLoaderOptions, modules: false },
          lessLoader
        )
      },
      {
        test: lessModuleRegex,
        use: getStyleLoaders(
          {
            ...defaultCSSLoaderOption,
            ...cssLoaderOptions,
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
              ...cssLoaderOptions.modules
            }
          },
          lessLoader
        )
      }
    )

    return config
  }

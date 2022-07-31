module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:prettier/recommended'
  ],
  rules: {
    camelcase: 0,
    'consistent-return': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        mjs: 'never',
        js: 'never',
        vue: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 'off',
    'no-new-func': 'off',
    'new-cap': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        usePrettierrc: false,
        trailingCommas: 'none',
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/media-has-caption': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off'
  }
}

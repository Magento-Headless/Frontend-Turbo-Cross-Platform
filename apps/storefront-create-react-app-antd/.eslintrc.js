module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@config', '^@components', '^@pages', '^@store']
      }
    ]
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {}
}

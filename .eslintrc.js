module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    // 'eslint key-spacing': ['error', { align: 'value' }],
  //   'jsx-closing-bracket-location': [1, 'tag-aligned']
  // }
  }
}

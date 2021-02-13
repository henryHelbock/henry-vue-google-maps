module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  "globals": {
    "google": true
  },
  // the ts-eslint recommended ruleset sets the parser so we need to set it back
  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
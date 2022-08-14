module.exports = {
  env: {
    browser: true,

    es2021: true,
  },

  extends: [
    'plugin:react/recommended',

    'airbnb',

    'airbnb-typescript',

    'prettier',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 'latest',

    sourceType: 'module',

    project: './tsconfig.json',
  },

  plugins: ['react', '@typescript-eslint'],

  rules: {
    'linebreak-style': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};

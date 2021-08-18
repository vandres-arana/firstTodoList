module.exports = {
  'env': {
    es6: true,
    node: true,
    jest: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    project: './tsconfig.json',
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/prop-types': [0],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': [0],
    'no-unsafe-any': 0,
    'ignore-rest-args': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

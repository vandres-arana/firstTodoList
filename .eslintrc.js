module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['@react-native-community/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/prop-types': [0],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': [0],
    'no-unsafe-any': 0,
    'ignore-rest-args': 0,
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [1],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
};

module.exports = {
  root: true,
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 1,
  },
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

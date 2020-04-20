module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    semi: [1, 'never'],
    curly: ['error', 'multi-line'],
  },
};

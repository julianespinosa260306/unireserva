module.exports = {
  root: true,
  env: { node: true, jest: true, es2022: true },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'new-cap': 'error',
    complexity: ['error', 10],
    'max-lines-per-function': ['error', 40],
  },
};

module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: [],
  parserOptions: {
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  'extends': 'plugin:vue/essential',
}

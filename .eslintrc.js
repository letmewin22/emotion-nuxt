module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'arrow-parens': [1, 'as-needed', { requireForBlockBody: false }],
    // 'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'unicorn/prefer-text-content': 'off',
    'no-new': 'off',
  },
}

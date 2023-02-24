// eslint-ignore-next-line no-undef
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {}
}
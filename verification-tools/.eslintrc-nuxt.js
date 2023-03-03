// eslint-ignore-next-line no-undef
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        "cypress/globals": true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        "plugin:cypress/recommended",
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'vue/multi-word-component-names': 'off'
    }
}
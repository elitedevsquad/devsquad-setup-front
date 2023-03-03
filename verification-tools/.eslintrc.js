// eslint-ignore-next-line no-undef
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        "cypress/globals": true
    },
    extends: [
        'eslint:recommended',
        "plugin:cypress/recommended",
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
    }
}

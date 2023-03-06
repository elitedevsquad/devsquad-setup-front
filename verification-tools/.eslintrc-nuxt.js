// eslint-ignore-next-line no-undef
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        "cypress/globals": true
    },
    globals: {
        'defineNuxtConfig': 'readonly',
        'defineNuxtPlugin': 'readonly',
        'defineNuxtRouteMiddleware': 'readonly',
        'definePageMeta': 'readonly',
        'useCookie': 'readonly',
        'useSeoMeta': 'readonly',
        'useHead': 'readonly',
        'useNuxtApp': 'readonly',
        'useRouter': 'readonly',
        'useRuntimeConfig': 'readonly',
        'useState': 'readonly',
        'onBeforeMount': 'readonly',
        'onBeforeUnmount': 'readonly',
        'onBeforeUpdate': 'readonly',
        'onMounted': 'readonly',
        'abortNavigation': 'readonly',
        'navigateTo': 'readonly',
        'reactive': 'readonly',
        'ref': 'readonly',
        'watch': 'readonly',
        'watchEffect': 'readonly',
        'inject': 'readonly',
        'nextTick': 'readonly',
        'useAttrs': 'readonly',
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
/* eslint-env node */

module.exports = {
    plugins: ['@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 0,
        'no-redeclare': 0,
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
    }
};

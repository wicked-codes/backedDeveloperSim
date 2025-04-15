import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigGoogle from 'eslint-config-google';
export default defineConfig([
    {
        files: ['**/*.js'],
        ignores: ['node_modules/**', '**/*.config.js', '!eslint.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
        rules: {
            quotes: ['error', 'single', { avoidEscape: true }],
            semi: ['error', 'always'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            'require-jsdoc': 'off',
            'valid-jsdoc': 'off',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'never'],
            'space-before-function-paren': ['error', 'never'],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'arrow-spacing': ['error', { before: true, after: true }],
            'space-infix-ops': 'error',
            'keyword-spacing': ['error', { before: true, after: true }],
            'eol-last': ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'spaced-comment': ['error', 'always', { markers: ['/'] }],
        },
    },
]);

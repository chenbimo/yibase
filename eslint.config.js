import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginVue from 'eslint-plugin-vue';

export default [
    {
        files: ['**/*.{mjs,cjs,js}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Pinia: 'readonly',
                ref: 'readonly',
                computed: 'readonly',
                watch: 'readonly',
                watchEffect: 'readonly',
                useGlobal: 'readonly',
                createI18n: 'readonly',
                createRouter: 'readonly',
                createWebHashHistory: 'readonly',
                $Storage: 'readonly',
                $ref: 'readonly'
            }
        }
    },
    pluginJs.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    eslintPluginPrettierRecommended,
    {
        rules: {
            'no-prototype-builtins': 'off',
            'max-len': 'off',
            'no-unused-vars': 'off',
            'linebreak-style': ['error', 'unix']
        }
    }
];

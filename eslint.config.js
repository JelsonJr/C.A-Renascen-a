/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'vue/multi-word-component-names': 'off',
    },
  },

  {
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],

    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: false,
          tabWidth: 4,
          trailingComma: 'es5',
          arrowParens: 'always',
          printWidth: 120,
        },
      ],
    },
  },
];

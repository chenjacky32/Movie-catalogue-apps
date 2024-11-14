import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  {
    rules: {
      'no-undef': 'off',
      'linebreak-style': 'off',
      'no-unused-vars': 'off',
      camelcase: 'off',
      'no-prototype-builtins': 'off',
    },
  },
];

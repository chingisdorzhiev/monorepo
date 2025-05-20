import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/public/**',
      '**/.next/**',
      '**/out/**',
    ],
  },
  // JS/TS базовые правила
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      js,
    },
    extends: ['js/recommended'],
  },

  // TypeScript рекомендации
  ...tseslint.configs.recommended,

  // Переопределение конкретного правила
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // React + JSX
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Prettier интеграция
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          printWidth: 100,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
  },
]);

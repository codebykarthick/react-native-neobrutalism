module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  ignorePatterns: [
    'lib/',
    'dist/',
    'build/',
    'example/',
    'docs/',
    'scripts/',
    'node_modules/',
  ],

  plugins: ['@typescript-eslint'],

  extends: ['@react-native', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],

  rules: {
    // base eslint
    'semi': 'off',
    'curly': ['warn', 'multi-or-nest', 'consistent'],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-async-promise-executor': 'warn',
    'require-await': 'warn',
    'no-return-await': 'warn',
    'no-await-in-loop': 'warn',
    'comma-dangle': 'off',

    // ban enums in public APIs
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message:
          "Enums have various disadvantages, use TypeScript's union types instead.",
      },
    ],

    // prettier
    'prettier/prettier': 'warn',

    // typescript (type-aware rules)
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',

    // react
    'react/no-unescaped-entities': 'off',

    // react native
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'warn',

    // react hooks
    'react-hooks/exhaustive-deps': 'error',
  },

  env: {
    node: true,
  },

  overrides: [
    {
      // JS / config files must NOT use type-aware rules
      files: ['*.js', '*.cjs', '*.mjs'],
      parserOptions: {
        project: null,
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
    },
  ],
};

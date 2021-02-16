/* eslint-disable max-len */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 2020,
  },
  rules: {
    'array-callback-return': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'warn',
    'key-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': [
      'warn',
      {
        code: 80,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
      },
    ],
    'newline-per-chained-call': 'error',
    'no-alert': 'warn',
    'no-await-in-loop': 'error',
    'no-case-declarations': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-const-assign': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unreachable': 'warn',
    // 'no-unused-vars': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true },
    ],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'warn',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'spaced-comment': ['error', 'always', {}],
    yoda: 'error',

    // TypeScript rules
    // '@typescript-eslint/array-type': ['error', 'array'],
    // '@typescript-eslint/ban-types': 'error',
    // '@typescript-eslint/camelcase': 'error',
    // '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // TODO: remove later
    '@typescript-eslint/explicit-member-accessibility': 'off', // TODO: remove later
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TSTypeParameterInstantiation'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off', // TODO: remove later
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/type-annotation-spacing': 'error',
  },
};

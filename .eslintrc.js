module.exports = {
  extends: ['auto'],
  ignorePatterns: [
    '*.config.*',
    '.eslintrc.js',
    'modules/backend/openapi-generated',
    'modules/backend/utils/fix-client.js',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    // Named export is easier to refactor automatically
    'import/prefer-default-export': 'off',
    /** Too tedious to type every function return explicitly */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** We prefer arrow functions */
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /** To remove optional parameter warning e.g. { page?: number } */
    'react/require-default-props': 'off',
    /** Include Typography as allowed text component */
    'react-native/no-raw-text': ['error', { skip: ['Typography', 'Button'] }],
    /* solves error with imports from files with no extension */
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    // cumbersome when prototyping
    'react-native/no-color-literals': 'off',
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
}

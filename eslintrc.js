module.exports =  {
  parser:  '@typescript-eslint/parser',  
  extends:  [
    'plugin:react/recommended', 
    'plugin:@typescript-eslint/recommended',
+   'prettier/@typescript-eslint',
+   'plugin:prettier/recommended',
  ],
  parserOptions:  {
  ecmaVersion:  2018,
  sourceType:  'module',
  ecmaFeatures:  {
    jsx:  true,  
  },
  },
  rules:  {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',
    curly: ['error', 'all'],
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'object-curly-spacing': 2,
    'prettier/prettier': 'error'
  },
  settings:  {
    react:  {
      version:  'detect',  
    },
  },
};
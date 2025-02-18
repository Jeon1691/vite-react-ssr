module.exports = {
  // typescript 전용 parser로 지정
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json',
    'sourceType': 'module',
  },
  'ignorePatterns': [
    '.eslintrc.js',
  ],
  'env': {
    'node': true,
    'browser': true,
    'es6': true,
  },
  'plugins': [
    '@typescript-eslint',
    'prettier',
    'react',
  ],
  'extends': [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  //plugin과 extends로 적용된 규칙에 덮어씌워져서 강제 설정할 수 있는 부분
  'rules': {
    'prettier/prettier': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 'off',
    // <> </>쓰는 것을 방지
    'no-unused-expressions': 0,
    'import/extensions': [
      'off',
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // require 사용을 방지 "@typescript-eslint/explicit-module-boundary-types": "off", //values returned from a module are of the expected type.
    'no-nested-ternary': 'off',
    // 삼항연산안에 또 삼항연산 하는 것을 방지
    'spaced-comment': 'off',
    // 주석 쓰는 것 방지
    'no-unused-variable': 'off',
    'no-unused-vars': [
      'warn',
      {
        'varsIgnorePattern': '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'varsIgnorePattern': '^_',
      },
    ],
    // 사용되지 않는 변수가 있는 것을 방지
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    // spread 연산자 사용을 방지
    'camelcase': 'off',
    // camelcase만 써야함
    // "@typescript-eslint/ban-types": "off", // function, object를 types로 명시하는 것을 방지
    'no-use-before-define': 'off',
    // 정의 되기 전에 사용하는 것을 방지
    '@typescript-eslint/no-inferrable-types': 'off',
    // 초기값 할당하는 경우 type 명시를 방지
    'react/require-default-props': 'off',
    // props에 undefined 들어가는 것을 방지
    'jsx-a11y/accessible-emoji': 'off',
    // emoji 대신 img 태그 사용
    'jsx-a11y/no-static-element-interactions': 'off',
    // html tag에서 event handler있을 때 role props도 있어야 함
    'jsx-a11y/click-events-have-key-events': 'off',
    // non-interactive한 tag의 경우 클릭 이벤트가 있을 때 keyboard 이벤트도 함께 있어야 함
    'lines-between-class-members': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
        '.js',
      ],
    },
  },
};
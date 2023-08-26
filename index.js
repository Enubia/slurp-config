module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier'
    ],
    plugins: [
        'prettier',
        '@typescript-eslint',
        'unicorn',
        'import',
        'unused-imports'
    ],
    rules: {
        'prettier/prettier': 'error',
        curly: [
            'error',
            'all'
        ],
        'dot-notation': 'error',
        'no-console': [
            'warn',
            {
                allow: [
                    'warn',
                    'error'
                ]
            }
        ],
        'no-debugger': 'error',
        'no-lonely-if': 'error',
        'no-param-reassign': 'warn',
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'no-throw-literal': 'error',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-object-spread': 'error',
        'require-atomic-updates': 'error',

        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/no-useless-constructor': 'error',

        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': [
            2,
            {
                caseSensitive: true
            }
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],

        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',

        'unused-imports/no-unused-imports': 'error',

        'vue/multi-word-component-names': 'off'
    },
    env: {
        jest: true,
        mocha: true,
        browser: true,
        node: true
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts'
            ]
        },
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.ts'
                ]
            }
        },
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$'
        ]
    }
}

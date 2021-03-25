module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx', '.ts'],
            },
        ],
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-use-before-define': 'off',
        'import/extensions': 'off',
        'arrow-body-style': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};

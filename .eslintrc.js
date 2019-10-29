module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        "plugin:react/recommended",
        // 'airbnb',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
          version: "detect",
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
                moduleDirectory: ['node_modules', 'src/'],
            }
        }
    },
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
    }
}
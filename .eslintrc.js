module.exports = {
    extends: ['@codinators/eslint-config'],
    rules: {
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelAttributes: ['label'],
                depth: 3,
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
};

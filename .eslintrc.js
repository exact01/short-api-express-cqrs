module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'commonjs',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-paths'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:perfectionist/recommended-natural-legacy',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'prisma/**'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'perfectionist/sort-imports': [
            'error',
            {
                type: 'line-length',
                order: 'desc',
                ignoreCase: true,
                specialCharacters: 'keep',
                internalPattern: ['^~/.+'],
                tsconfigRootDir: '.',
                partitionByComment: false,
                partitionByNewLine: false,
                newlinesBetween: 'always',
                maxLineLength: undefined,
                groups: [
                    'type',
                    ['builtin', 'external'],
                    'internal-type',
                    'internal',
                    ['parent-type', 'sibling-type', 'index-type'],
                    ['parent', 'sibling', 'index'],
                    'object',
                    'unknown',
                ],
                customGroups: { type: {}, value: {} },
                environment: 'node',
            },
        ],
        'perfectionist/sort-objects': ['off'],
        'perfectionist/sort-classes': ['off'],
        'perfectionist/sort-switch-case': ['off'],
        'paths/alias': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'linebreak-style': 0,
        'no-console': 'warn',
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                tabWidth: 4,
                printWidth: 100,
                singleQuote: true,
                trailingComma: 'all',
                overrides: [
                    {
                        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
                        options: {
                            parser: 'typescript',
                        },
                    },
                    {
                        files: ['*.md', '*.json', '*.yaml', '*.yml'],
                        options: {
                            tabWidth: 2,
                        },
                    },
                ],
            },
        ],
    },
};

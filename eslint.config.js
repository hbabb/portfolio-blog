import antfu from '@antfu/eslint-config';

export default antfu(
  {
    typescript: true,
    formatters: true,
    vue: true,
    react: true,
    astro: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: 'single',
      objectCurlySpacing: 'always',
      arrowParens: 'always',
      linebreaks: 'unix',
    },
    ignores: ['.pnpm-store/**', 'node_modules/**', '**/migrations/*'],
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^~/.+', '^@/.+'],
          tsconfig: {
            rootDir: '.',
            filename: 'tsconfig.json',
          },
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
          },
          ignore: ['README.md'],
        },
      ],
    },
  },
);

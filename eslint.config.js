// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      // Custom rules here
    },
  },
  {
    files: ['*.js', '*.config.{js,ts}', 'tasks/**/*.{js,ts}', '.husky/**/*.{js,ts}'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ['node_modules', 'dist', 'public', 'reports', 'src/graphql/gen'],
  },
);

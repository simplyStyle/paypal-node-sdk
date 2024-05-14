/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/armitjs/armit
 */

// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@armit/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@armit/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [
    ...getDefaultIgnorePatterns(),
    'src/custom-admin-ui/admin-ui',
  ],
  extends: [
    '@armit/eslint-config-bases/typescript',
    // Apply prettier and disable incompatible rules
    '@armit/eslint-config-bases/prettier',
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};

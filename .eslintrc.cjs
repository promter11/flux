module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["package.json"],
      rules: {
        "sort-keys-fix/sort-keys-fix": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "import",
    "prettier",
    "react-refresh",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "prettier/prettier": 2,
    "react-refresh/only-export-components": "warn",
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: true,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

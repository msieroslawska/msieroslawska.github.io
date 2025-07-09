import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/strict",
      "plugin:@typescript-eslint/stylistic",
      "prettier",
    ],
    plugins: ["import"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/member-ordering": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal", // Imports with @/ prefix
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  }),
];

export default eslintConfig;

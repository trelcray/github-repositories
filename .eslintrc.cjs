module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "tailwindcss",
  ],
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.cjs",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "linebreak-style": ["error", "unix"],
    camelcase: "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};

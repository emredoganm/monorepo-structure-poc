module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["standard", "plugin:react/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    curly: 0,
    semi: 0,
    quotes: ["off", "single"],
    "comma-dangle": 0,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};

module.exports = {
  extends: ["react", "prettier", "prettier/react"],
  plugins: ["react-hooks"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "react/jsx-boolean-value": ["warn", "always"],
  },
}

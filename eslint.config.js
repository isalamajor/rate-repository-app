const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    rules: {
      semi: "error",
      "react/prop-types": "off",
    },
  },
]);

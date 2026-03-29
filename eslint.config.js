const {
    defineConfig,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
{
    ignores: ['eslint.config.js', '.eslintrc.js'],
},
{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
    ),

    languageOptions: {
        parser: tsParser,

        parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: __dirname,
        },
    },

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },
}]);
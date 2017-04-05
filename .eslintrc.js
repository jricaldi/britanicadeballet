module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-first-prop-new-line": [2, "never"],
      "react/jsx-indent-props": 0,
      "react/jsx-closing-bracket-location": 0,
      "react/jsx-curly-spacing": [2, "always"],
      "arrow-parens": [2, "as-needed"],
      "react/no-danger": 0,
      "no-console": 0,
      "no-underscore-dangle": 0,
      'import/extensions': ['off', 'never'],
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "react/jsx-wrap-multilines": 0,
      "react/prop-types": 0,
    },
};

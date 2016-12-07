module.exports = {
    "extends": "../.eslintrc.js",
    "env": {
      "mocha": true
    },
    "plugins": [
      "mocha"
    ],
    "globals": {
      "browser": false
    },
    "rules": {
      "mocha/no-identical-title": 2
    }
};
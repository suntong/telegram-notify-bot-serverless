// https://gist.github.com/ls42/bc6aebda6c66bebe0c53
module.exports = {
  'env': {
    'browser': true,
    'meteor': true,
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    // 'plugins': ['react'],
    'rules': {
	"no-console": "off",
	"no-mixed-spaces-and-tabs": "off",
	"no-trailing-spaces": "off",
        'indent': "off",
        //'semi': [2, 'never'],
        'semi': "off",
        //'quotes': [2, 'single'],
        "quotes": "off",
        "no-unused-vars": "warn",
        'linebreak-style': [2, 'unix'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'eol-last': [2],
    },
    'globals': {
        // Collections
        'Persons': true,
        'Modules': true,
        
        // More stuff
        // [...]

        // Packages
        'lodash': true,
        'i18n': true,
        'moment': true,
        'Messenger': true
    }
}

const eslintrc = require('./index.js');
/** @type {import('eslint-remote-tester').Config} */
module.exports = {
    repositories: ['enubia/express-pug-boilerplate', 'enubia/ghost-chat', 'donategifts/donategifts'],
    extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    eslintrc,
    cache: false,
    compare: true,
    pathIgnorePattern: `(${[
        'node_modules',
        '\\/\\.', // Any file or directory starting with dot, e.g. ".git"
        'dist',
        'public',
        'resources',
        'js/app',
        'scripts',
        'build',
        'test',
        'webpack.config.js',
    ].join('|')})`,
};
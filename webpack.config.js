//const config = require('./webpackconfig/config.js');
console.log('process env is ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpackconfig/webpack.config.prod.js');
} else {
    module.exports = require('./webpackconfig/webpack.config.dev.js');
}
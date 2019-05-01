/*
日志中间件
*/
const log4js = require('log4js');

exports.logger = function(options) {
  return async function(ctx, next) {
    ctx.logger = log4js.getLogger('showjoy');
    await next();
  }
}
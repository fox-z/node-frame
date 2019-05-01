/*
业务错误处理中间件
*/
exports.handleError = function(options) {
  return async function(ctx, next){
    try {
      await next();
    } catch (err) {
      ctx.logger.error(`application handle error %s`, err.toString());
    }
  }
}
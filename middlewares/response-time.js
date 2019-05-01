/*
统计请求响应时间中间件
*/
exports.responseTime = function(options) {
  return async function(ctx, next){
    let start = new Date();
    await next();
    let ms = new Date() - start;
    ctx.logger.info(`request : ${ctx.method} ${ctx.url} used ${ms}ms`);
  }
}
/*
应用入口配置
*/
const path = require('path');
const Koa = require('koa');
const log4js = require('log4js');
const Favicon  = require('koa-favicon'); 
const Render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const MiddleWares = require('./middlewares');
const Config = require('./config');
const Logger = require('./config/logger');
const app = new Koa();

const router = require('./router');
//应用配置中间件
app.use(async function(ctx, next) {
  ctx.appConfig = Config;
  await next();
})
//icon
app.use(Favicon(__dirname + '/public/favicon.ico'));
//请求解析
app.use(bodyParser({jsonLimit:"100mb"}));
//应用日志中间件
app.use(MiddleWares.logger());
//业务错误处理中间件
app.use(MiddleWares.handleError());
//请求响应时间统计
app.use(MiddleWares.responseTime());
//jwt中间件
app.use(MiddleWares.JWT({secret: '!showjoy@shop#test', expiresIn: 60 * 60 * 24 * 7}))
Render(app, {
  root: path.join(__dirname, 'public'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});
router(app);

app.on('error', function(err, ctx){
  ctx.logger.error(`showjoy application occour error: ${err}`);
});
module.exports = app;

/*
 * author: mufeng
 * desc: showjoy logger configure
 */

let log4js = require('log4js');
let config = require('./index'); 

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    showjoy: {
      type: 'file',
      filename: config.logPath + 'showjoy.log',
      pattern: '-yyyy-MM-dd',
      alwaysIncludePattern: true,
      layout:{
        type: 'pattern',
        pattern: '%d(%z)[%p][%c] %m'
      }
    }
  },
  categories: {
    showjoy: { appenders: ['showjoy', 'console'], level: config.logLevel },
    default: { appenders: ['console'], level: config.logLevel }
  },
  pm2: true
})


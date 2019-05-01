const Sequelize = require('sequelize');
const config = require('../config');
const logger = require('log4js').getLogger('showjoy');

const mysql = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  port: config.mysql.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00'
});

mysql
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch(err => {
    logger.info('Unable to connect to the database:', err);
  });

exports = module.exports = mysql;
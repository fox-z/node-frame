const nzd = require('node-zookeeper-dubbo');
const config = require('../config').dubbo;
const options = {
  application: config.application,
  register: config.register,
  dubboVer: config.dubboVer,
  root: config.root,
  timeout: config.timeout,
  dependencies: {
    backgroundSupplerProvider: {
      interface: 'com.showjoy.product.interfaces.BackgroundSupplerProvider',
      version: '1.0.0',
      timeout: 6000,
    }
  }
}
options.java = require('js-to-java');
const dubbo = new nzd(options);
exports = module.exports = dubbo;
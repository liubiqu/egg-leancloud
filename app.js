// 启动自定义
'use strict';

module.exports = app => {
  // 加载自定义的leacloud中间件
  // PS: 插件中使用coreMiddleware加载中间件
  // (框架和插件不支持在 config.default.js 中匹配 middleware)
  app.config.coreMiddleware.push('leancloud');
};

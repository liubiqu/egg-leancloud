// 中间件
'use strict';

module.exports = (options, app) => {
  return app.AV.koa();
};

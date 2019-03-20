'use strict';

const LEANCLOUD = Symbol('Application#AV');
const AV = require('leanengine');

module.exports = {
  /**
   * LeanCloud Storage
   * @member {Object} Application#AV
   */
  get AV() {
    if (!this[LEANCLOUD]) {
      console.log('leancloud初始化', this.config.leancloud);
      AV.init(this.config.leancloud);
      if (this.config.leancloud.useMasterKey) {
        AV.Cloud.useMasterKey();
      }
      this[LEANCLOUD] = AV;
    }
    return this[LEANCLOUD];
  },
};

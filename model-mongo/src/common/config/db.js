'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  prefix: 'think_',
  encoding: 'utf8',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  },
  options: {
    authSource: 'admin'
  }
};

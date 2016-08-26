/*
 * zhrren
 * zhrren@qq.com
 */

'use strict';

module.exports = function (content, file, conf) {

  //log.debug("content");// 兼容content为buffer的情况
  var result = content.toString();
  if (!file.isText())
    return result;

  var opts = fis.util.clone(conf);
  if (opts.rules == null || opts.rules.length == 0)
    return result;

  for (var i = 0; i < opts.rules.length; i++) {
    var rule = opts.rules[i];
    result = result.replace(rule.search, rule.replace);
  }

  return result;
};

/*
 * @file 杂七杂八的工具函数
 *
 * @author Skyline Yu(yutianxiang@baidu.com)
 */

'use strict';
// var $ = require('jquery');
var util = {};
/**
 * 空函数,所有需要默认绑定空函数的全部用noop
 * 减少新建function带来的资源消耗
 */
util.noop = function() {};

/**
 * 继承
 * @param  {function} type 子类
 * @param  {function} superType 父类
 * @return {function} 返回继承后的构造函数
 */
util.inherits = function(type, superType) {
    var Empty = function() {};
    Empty.prototype = superType.prototype;
    var proto = new Empty();

    var originalPrototype = type.prototype;
    type.prototype = proto;

    for (var key in originalPrototype) {
        proto[key] = originalPrototype[key];
    }

    type.prototype.constructor = type;
    
    return type;
};

/**
 * 简单的Promise对象判断
 * @param  {*}  obj  需要判断的对象
 * @return {Boolean}  返回砍断结果
 */
util.isPromise = function(obj){
    var bool = true;
    bool = bool && $.type(obj) === 'object' && $.type(obj.then) === 'function';
    return bool;
};
util.promiseList = function(arr) {
    var deferred = $.Deferred();
    var promise = deferred.promise();
    deferred.resolve();
    $.each(arr, function(index, value) {
        promise = promise.then(function() {
            return value;
        }, function() {
            return value;
        });
    });
    return promise;
};

module.exports = util;

/*
 * @file ViewModel构造函数
 *
 * @author liubin29(liubin29@baidu.com)
 *         
 */

'use strict';

function onComponentReady() {
    if ($.parser && typeof $.parser.parse === 'function') {
        $.parser.parse();
    }
}

function getComponent(options) {
    options.ready = options.ready ? [options.ready] : [];
    options.ready.unshift(onComponentReady);

    return Vue.extend(options);
}

var ViewModel = {
    getComponent: getComponent
};

module.exports = ViewModel;

// ==UserScript==
// @name 			宝塔面板去广告js屏蔽版
// @author			www.wdja.net
// @version			0.0.4
// @description		宝塔面板去广告, @match 后面请填写自己面板的地址,多个面板，请复制多行@match
// @match                     http://127.0.0.1:3312/*
// @run-at			document-idle
// @namespace           https://greasyfork.org/zh-CN/scripts/478844
// @require           https://code.jquery.com/jquery-2.1.4.min.js
// @license                    MIT
// ==/UserScript==
(function(){
    $("#home-recommend").each(function(){
        $(this).hide();
    });
    $("#bt-fuli").each(function(){
        $(this).hide();
    });
    $(".recommend-soft").each(function(){
        $(this).hide();
    });
    $(".btltd-gray").each(function(){
        $(this).hide();
    });
    $(".danger-tips").each(function(){
        $(this).hide();
    });
    $("#updata_pro_info").each(function(){
        $(this).hide();
    });
})();

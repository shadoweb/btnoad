# btnoad
浏览器脚本：宝塔面板去广告js屏蔽版


宝塔面板去广告, @match 后面请填写自己面板的地址,多个面板，请复制多行@match  
例如：  
// @match                     http://127.0.0.1:3312/*  
// @match                     https://192.168.1.1:3312/*  
  
如果有未屏蔽的广告，可以查看源码，找到对应的id或class名称，复制代码修改一个新的即可。  
id为updata_pro_info这样写  
    $("#updata_pro_info").each(function(){  
        $(this).hide();  
    });  
class包含danger-tips这样写  
    $(".danger-tips").each(function(){  
        $(this).hide();  
    });  
交流QQ925474725或邮件shadoweb@qq.com  
  

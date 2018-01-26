'use strict';
(function ($) {
    /***
     * singleAccordion method
     * @param {width，height，title，content}
     * @returns jquery object
     */
    $.fn.extend({
        getCDShopComponent: function(){
            var _targetEle = this;
            return {
                singleAccordion: function(config){
                    //定义折叠面板默认配置
                    var defaultConfig = {
                        width: "",
                        height: "",
                        title: "",
                        htmlPosition: "",
                        duration: 500,
                        content:""
                    }
                    //根据传入配置对象扩展默认折叠面板配置对象
                    $.extend(defaultConfig,config);
                    /*
                    * 表头绑定事件
                    * */
                    function bindTitleClick(){
                        $("div.accordion-title").click(function(){
                            $(".accordion-content").slideToggle(defaultConfig.duration);
                        });
                    }
                    /*
                    * 修改折叠面板样式
                    * */
                    function restyleHtml(){
                        $(".single-accordion-wrapper").css({"width":defaultConfig.width,"height":defaultConfig.height});
                    }
                    //定义html模板
                    var tpl = "<div class=\"single-accordion-wrapper\">\n" +
                        "        <div class=\"accordion-title\">"+defaultConfig.title+"</div>\n" +
                        "        <div class=\"accordion-content\">"+defaultConfig.content+"</div>\n" +
                        "    </div>";
                    /*
                    * 匹配折叠面板在dom中的位置
                    * 解释：目标元素即是传过来的那个html元素
                    * 5个匹配项：
                    * ①outside：给目标包裹html模板
                    * ②inside： 在目标元素内部添加html模板
                    * ③before： 在目标元素之前添加html模板
                    * ④after： 在目标元素之后添加html模板
                    * ⑥replace： 替换掉目标元素
                    * */
                    switch(defaultConfig.htmlPosition){
                        case 'outside': {
                            _targetEle.wrap(tpl);
                            bindTitleClick();
                            restyleHtml();
                            return _targetEle;
                        }
                            break;
                        case 'inside': {
                            _targetEle.append(tpl);
                            bindTitleClick();
                            restyleHtml();
                            return _targetEle;
                        }
                            break;
                        case 'before': {
                            _targetEle.before(tpl);
                            bindTitleClick();
                            restyleHtml();
                            return _targetEle;
                        }
                            break;
                        case 'after': {
                            _targetEle.after(tpl);
                            bindTitleClick();
                            restyleHtml();
                            return _targetEle;
                        }
                            break;
                        case 'replace': {
                            _targetEle.after(tpl);
                            bindTitleClick();
                            restyleHtml();
                            _targetEle.remove();
                            return $(".single-accordion-wrapper");
                        }
                            break;
                    }
                },
                shadeTextInput: function(){
                    var tpl = "<div class=\"shade-text-container\">\n" +
                        "    <input class=\"shade-text-target\" type=\"text\" >\n" +
                        "    <span class=\"shade-text\">请输入您的账号</span>\n" +
                        "</div>";
                    _targetEle.append(tpl);
                    var promptMsgEle = $(".shade-text");
                    $(".shade-text-container").click(function(){
                        promptMsgEle.animate({
                            top: '-12px',
                            left: '0px',
                            'font-size': '8px'
                        },500,function(){
                            promptMsgEle.css("color","#2196f3");
                        });
                        $(".shade-text-target").focus();
                    });
                    $(".shade-text-target").blur(function(){
                        var eleValue = $(".shade-text-target").val();
                        if(!eleValue){
                            promptMsgEle.animate({
                                top: '2px',
                                left: '0px',
                                'font-size': '10px'
                            },500,function(){
                                promptMsgEle.css("color","#3C3F41")
                            });
                        }
                    });
                    return _targetEle;
                },
                carouselPanel: function(_options){
                    /*
                    *configOptions配置对象：
                    *
                    *
                    *
                    */
                    /*定义一个标签的id选择器值组成的数组*/
                    var itemIdSelectors = [];
                    var itemGroupTpl = "";
                    var defaultConfig = {
                        width: '300px',
                        height: '250px',
                        itemAmount: 4,
                        contentElement:'img'
                    }

                    $.extend(defaultConfig,_options);
                    for(var i = 0; i < defaultConfig.itemAmount; i++){
                        if(i == 0){
                            itemIdSelectors.push("#ci"+i);
                            itemGroupTpl += "<"+defaultConfig.contentElement+"  id=\"ci"+i+"\""+"  class=\"carousel-item  carousel-item-first\"/>";
                        }else{
                            itemIdSelectors.push("#ci"+i);
                            itemGroupTpl += "<"+defaultConfig.contentElement+"  id=\"ci"+i+"\""+"  class=\"carousel-item  carousel-item-other\"/>";
                        }
                            
                    }
                    $(".sb").html(itemGroupTpl);
                    var tpl = "<div class=\"carousel-container\">\n" +itemGroupTpl+
                        "    <div class=\"carousel-btn-group\">\n" +
                        "        <div id=\"round-btn0\" class=\"round-btn\"></div>\n" +
                        "        <div id=\"round-btn1\" class=\"round-btn\"></div>\n" +
                        "        <div id=\"round-btn2\" class=\"round-btn\"></div>\n" +
                        "        <div id=\"round-btn3\" class=\"round-btn\"></div>\n" +
                        "    </div>\n" +
                        "</div>";
                    _targetEle.append(tpl);
                   
                    /*启动轮播图定时器*/
                    var timer = startCarouselTimer();
                    function startCarouselTimer() {
                        /*将setInterval的返回值直接返回，便于其他程序终止定时器操作*/
                        return setInterval(function () {
                            var val;
                            for (var i = 0; i < itemIdSelectors.length; i++) {
                                /*获取当前显示的那个img元素的display属性*/
                                val = $(itemIdSelectors[i]).css("display");
                                /*这个条件分支包含了所有当前显示的不是最后一个图片元素的情况*/
                                if (val != "none" && i + 1 < itemIdSelectors.length) {
                                    $(itemIdSelectors[i]).hide();
                                    $(".round-btn:eq(" + i + ")").css("backgroundColor", "#242225");
                                    $(itemIdSelectors[i + 1]).show();
                                    $(".round-btn:eq(" + (i + 1) + ")").css("backgroundColor", "#FFF");
                                    /*更新完视图后，通过break语句跳出for循环*/
                                    break;
                                } else if (val != "none" && i + 1 == itemIdSelectors.length) {
                                    /*这个条件分支用来处理当前显示图片是最后一个图片的情况*/
                                    $(itemIdSelectors[i]).hide();
                                    $(".round-btn:eq(" + i + ")").css("backgroundColor", "#242225");
                                    $(itemIdSelectors[0]).show();
                                    $(".round-btn:eq(" + 0 + ")").css("backgroundColor", "#FFF");
                                    break;
                                }
                            }
                        }, 2000);
                    }

                    /*给圆圈按钮绑定点击事件*/
                    $(".round-btn").click(function (event) {
                        /*通过event事件对象下面的currentTarget获取number型的id值*/
                        var eleId = event.currentTarget.id;
                        var _index = eleId.charAt(eleId.length - 1);
                        /*清除已经存在的定时器timer，以便不影响对界面样式的操作*/
                        clearInterval(timer);
                        for (var i = 0; i < itemIdSelectors.length; i++) {
                            var val = $(itemIdSelectors[i]).css("display");
                            if (val != "none") {
                                $(itemIdSelectors[i]).hide();
                                $("#ci" + _index).show();
                                $(".round-btn:eq(" + i + ")").css("backgroundColor", "#242225");
                                $("#round-btn" + _index).css("backgroundColor", "#FFF");
                                /*根据当前点击btn元素更新完视图之后，重启定时器任务*/
                                timer = startCarouselTimer();
                                break;
                            }
                        }
                    });
                }
            }
        }
    });
})(jQuery);

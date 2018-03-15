$(document).ready(function(){
    // top下拉菜单
    ;(function(){
        var $popup=$("#download .header-menu-popup");
        var intvalmenu;
        

        $("#download").hover(function(){
            $popup.show();
        },function(){
            intvalmenu=setTimeout(function(){
                $popup.hide()
            },2000)
        })
    })()

    //banner轮播
    ;(function(){
        //切图方法
        var $img=$(".banner-img li");
        var index=1;
        var $nav=$(".banner-nav li")
        
        function changeimg(){
            $nav.removeClass('hover');
            $nav.eq(index).addClass('hover');
            index=index%10;
            $img.hide();
            $img.eq(index).fadeIn();
            index++;
        }
        //定时轮播方法
        var intval;
        function timeinterval(){
            intval=setInterval(changeimg,3000);
        }
        //mouseenter停止轮播
        $img.parent().hover(function(){
            clearInterval(intval)
        },function(){
            timeinterval()
        })
        //navhover方法
        var $nav=$(".banner-nav li");
        var indexnav=0;
        $nav.hover(function(){
            clearInterval(intval)
            indexnav=$(this).index();
            index=indexnav;
            changeimg();
            },timeinterval)

        timeinterval();
    })()

    //content banner轮播 公用
    ;(function(){
        var num=2;/*图片数量*/
        var $img=$(".contentbanner .bannerimg a");
        var $content=$(".contentbanner .bannercontent a");
        var index=1;
        //切图、内容方法       
        function changeimg(){
            index=index%num;
            $img.hide();
            $img.eq(index).fadeIn();
            $content.hide();
            $content.eq(index).fadeIn();
            index++;
        }
        //定时轮播方法
        var intval;
        function timeinterval(){
            intval=setInterval(changeimg,2800);
        }
        //mouseenter停止轮播
        $(".contentbanner div:lt(2)").hover(function(){
            clearInterval(intval)
        },function(){
            timeinterval()
        })
        //botton切图方法
        var $bottonlt=$(".turnleft");
        var $bottonrt=$(".turnright");
        var nowindex=0;
        $bottonlt.click(function(){
            clearInterval(intval)
            nowindex=$img.filter(":visible").index();
            index=nowindex-1;
            changeimg();
            timeinterval();
        })
        $bottonrt.click(function(){
            clearInterval(intval)
            nowindex=$img.filter(":visible").index();
            index=nowindex+1;
            changeimg();
            timeinterval();
        })

        timeinterval();
    })()

    // 搜索栏表单提交
    ;(function(){
        $(".header-search input[type='submit']").click(function(){
            window.open("http://so.iqiyi.com/so/q_"+$(".header-search input[type='text']").val(),'_blank');
            return false;
        })
    })()
})
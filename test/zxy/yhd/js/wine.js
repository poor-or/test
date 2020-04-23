$(".box").click(function () {
    $(this).toggleClass("block-box");
})
$(".input").focus(function(){
    $(this).css("background","#fff")
    $(".heard-inp").addClass("focusd");
})
$(".input").blur(function(){
    $(this).css("background","#f8f8f8")
    $(".heard-inp").removeClass("focusd");
})
$(window).scroll(function () {
    num = $(window).scrollTop();
    if (num > 150) {
        $(".super-con").addClass("postion");
    } else {
        $(".super-con").removeClass("postion");
    };
    if (num > 700) {
        $(".rightside").css("display", "block");
    } else {
        $(".rightside").css("display", "none");
    }
    
})
// 回到抢购中
$(".online-selling").click(function () {
    $('html').animate({ scrollTop: '300px' }, 900);
});

// 回到即将开始
$(".wait-sell").click(function () { 
$('html').animate({ scrollTop:  $('.comming-title').offset().top }, 900);  
});
// 回到顶部
$(".back").click(function () {
    $('html').animate({ scrollTop: '0px' }, 900);
});
// 请求数据 抢购中

function sell(num){
    $.ajax({
        type: "GET",
        url: "http://localhost:8081/test/zxy/yhd/list.php?page="+num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {  
                                $(".food-list").get(0).innerHTML += `
                                <li>
                                <div class="inner">
                                    <a href="#" class="pro-img">
                                        <img src=${data[i].pictureAddress} alt="">
                                    </a>
                                    <p class="pro-title">
                                        <a href="#">${data[i].goodsName}</a>
                                    </p>
                                    <div class="bottom-info">
                                        <div class="bottom-con">
                                           <p class="sold-num">已售<b>50%</b></p>
                                           <div class="process-bar">
                                               <i class="process"></i>
                                               <div class="process-bg"></div>
                                           </div>
                                           <div class="pirce-info">
                                               <span class="new-pirce">${data[i].price}</span>
                                          <span class="old-pirce">${parseInt(data[i].price.substring(1,))+parseInt(data[i].price.substring(1,))}</span>
                                             </div>
                                        </div>
                                    </div>
                                    <a href="#" class="btn" target="_blank">加入购物</a>
                                </div>
                            </li>
                               `
                            }
        }
    
    })
    }
sell(61);
// 即将开始
 function comming(num){
    $.ajax({
                type:"GET",
                url:"http://localhost:8081/test/zxy/yhd/list.php?page="+num,
                data:{ },
                dataType:"json",
                async:true,
                success:function(data1){
                    console.log(data1)
                    for(var i=0;i<data1.length;i++){
                        $(".comming-list").get(0).innerHTML+=`
                        <li>
                    <div class="inner">
                        <a href="#" class="pro-img">
                            <img src=${data1[i].pictureAddress} alt="">
                        </a>
                        <p class="pro-title">
                            <a href="#">${data1[i].goodsName}</a>
                        </p>
                        <div class="bottom-info">
                            <div class="bottom-con">
                                <p class="sell-num">22:00:00准时开始</p>
                                <div class="pirce-info sell-pirce">
                                    <span class="new-pirce">${data1[i].price}</span>
                                    <span class="old-pirce">${parseInt(data1[i].price.substring(1,))+parseInt(data1[i].price.substring(1,))}</span>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn" target="_blank" style="background-color:#ffb74d;">加入购物</a>
                    </div>
                </li>
                `
                    }
                }
                })  
 }
 comming(101)
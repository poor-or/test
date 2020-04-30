var server="http://localhost:8080"
// 搜索框
$(".inp-icon").click(function(){
    if($(".inp").val()==""){
        $(".heard-inp").removeClass("inp-bg")
    }
    else{
        console.log($(".inp").val())
        // 跳转到详情页面
    //  location.href="cart.html?value="+$(".inp").val()
    }
})

$(".inp").focus(function(){
    $(".heard-inp").addClass("inp-bg")
    $(".inp").css("background","#fff")
})
$(".inp").blur(function(){
    $(".inp").css("background","#f8f8f8")
    $(".heard-inp").removeClass("inp-bg")
})

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
    $('html').animate({ scrollTop: $('.comming-title').offset().top }, 900);  
    });
    // 回到顶部
    $(".back").click(function () {
        $('html').animate({ scrollTop: '0px' }, 900);
    });
// 点击 跳转到详情页
function val(e) {
    console.log(e.id)
    var id=e.id;
    window.location.href=server+"/test/test/lbc/yhd/yhd1.html?goodsId="+id;
}

// 请求数据 抢购中

function sell(num){
    $.ajax({
        type: "GET",
        url: server+"/test/test/zxy/yhd/php/list.php?page="+num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {  
                                $(".food-list").get(0).innerHTML += `
                                <li>
                                <div class="inner">
                                <a href="javascript: void(0);" class="pro-img" onclick="val(this)" id=${data[i].goodsId}>
                                        <img src=${data[i].pictureAddress} alt="">
                                    </a>
                                    <p class="pro-title">
                                        <a href="javascript: void(0);" onclick="val(this)" id=${data[i].goodsId}>${data[i].goodsName}</a>
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
                                    <a href="javascript: void(0);" class="btn shop-btn" onclick="shopcar(this)" id=${data[i].goodsId}>加入购物</a>
                <p class="ok">成功加入</p>
                                </div>
                            </li>
                               `
                            }
        }
    
    })
    }
sell(183);
// 即将开始
 function comming(num){
    $.ajax({
                type:"GET",
                url:server+"/test/test/zxy/yhd/php/list.php?page="+num,
                data:{ },
                dataType:"json",
                async:true,
                success:function(data1){
                    for(var i=0;i<data1.length;i++){
                        $(".comming-list").get(0).innerHTML+=`
                        <li>
                    <div class="inner">
                    <a href="javascript: void(0);" class="pro-img" onclick="val(this)" id=${data1[i].goodsId}>
                    <img src=${data1[i].pictureAddress} alt="">
                </a>
                <p class="pro-title">
                    <a href="javascript: void(0);" onclick="val(this)" id=${data1[i].goodsId}>${data1[i].goodsName}</a>
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
                        <a href="javascript: void(0);" class="btn shop-btn" onclick="shopcar(this)" id=${data1[i].goodsId}>加入购物</a>
                        <p class="ok">成功加入</p>
                    </div>
                </li>
                `
                    }
                }
                })  
 }
 comming(0)
 // 获取用户名id
var userInfo = document.getElementsByClassName("login-txt")[0].children;
var userName = sessionStorage.getItem("userName");
if (userName) {
    var user_ID;
    function getLv() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", server+"/test/test/zxy/yhd/php/userID.php", true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].MemberName == userName) {
                        user_ID = data[i].MemberID
                        console.log(user_ID)
                    }
                }
            }
        }
    }
    getLv();
    userInfo[0].parentElement.previousElementSibling.style.display = "none";
    userInfo[0].parentElement.style.display = "block";
    userInfo[1].innerHTML = userName;
    userInfo[3].children[0].children[1].innerHTML = userName;
} else {
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    userInfo[0].parentElement.style.display = "none";
}
// 加入购物车
function shopcar(e) {
  e.nextElementSibling.style.display="block";
  setTimeout(function(){
    e.nextElementSibling.style.display="none";
},800)
    var member_id = user_ID;
    var time = new Date();
    var timeNow = time.toLocaleDateString();
    var good_id = e.id;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", server+"/test/test/zxy/yhd/php/add-goods.php?member_id=" + member_id + "&timeNow=" + timeNow + "&good_id=" + good_id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
        }
    }
}
 
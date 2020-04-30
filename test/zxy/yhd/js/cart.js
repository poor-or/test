var server="http://localhost:8080"

// 搜索框
$(".search-btn").click(function(){
    if($(".search-inp").val()==""){
       console.log(11)
    }
    else{
        console.log($(".search-inp").val())
        // 跳转到详情页面
    //  location.href="cart.html?value="+$(".search-inp").val()
    }
})

// 登录显示用户名
var userInfo = document.getElementsByClassName("login-txt")[0].children;
var userName = sessionStorage.getItem("userName");
if (userName) {
    userInfo[0].parentElement.previousElementSibling.style.display = "none";
    userInfo[0].parentElement.style.display = "block";
    userInfo[1].innerHTML = userName;
    userInfo[3].children[0].children[1].innerHTML = userName;
} else {
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    userInfo[0].parentElement.style.display = "none";
}
function exitUser() {
    userInfo[0].parentElement.style.display = "none";
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
}
// 城市选择
$(".address").click(function () {
    $(".address").addClass("select");
    $(".tab-box").css("display", "block")
})
$(".close").click(function () {
    $(this).parent().remove();
})
// 购物车商品请求
$.ajax({
    type: "GET",
    url: server+"/test/test/zxy/yhd/php/cart-goods.php",
    data: {},
    dataType: "json",
    async: true,
    success: function (res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].OrderState == 0) {
                $(".goods").get(0).innerHTML += `
         <div class="cart-list "> 
           <div class="cart-tit clearfix">
                <span class="checkbox1">
                    <input type="checkbox" name=""  class="check2" id=${res[i].goodsID}>
                    <a href="javascript:void(0);" target="_blank" class="dian">${res[i].storeName}</a>
                </span>
            </div>
            <div class="cart-list-goods">
                <ul class="cart-items">
                    <li class="cart-goods-activity">
                        <div class="goods-items clearfix">
                            <input type="checkbox" name="" id="" class="check3 ">
                            <a href="javascript:void(0);" class="goods-items-img" target="_blank">
                                <img src=${res[i].pictureAddress} alt="">
                            </a>
                            <a href="javascript:void(0);" target="_blank" class="goods-items-title">${res[i].goodsName}</a>
                            <p class="goods-items-price">${res[i].price.substr(1)}</p>
                            <div class="goods-items-num">
                                <div class="num-act">
                                    <span class="minus num-span">-</span>
                                    <span class="goods-num">1</span>
                                    <span class="add num-span">+</span>
                                </div>
                            </div>
                            <div class="item-amount">
                                <p class="pirce-amount">${res[i].price.substr(1)}</p>
                            </div>
                            <div class="goods-del">
                                <a href="javascript:void(0);" class="del" id=${res[i].goodsID}>
                                    <i class="iconfont icon-shanchu9" ></i>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul> 
            </div> 
            <div class="goods-amount">
                <div class="amount">
                    商品总价：
                    <em>￥</em>
                    <span class="amount-total">0
                    </span>

                </div>
            </div>
        </div> 
   
     `
    //购物车显示与隐藏 
    cart()       
    }
            else {
                cart()

            }

        }
        // 购物车的显示与隐藏
        function cart() {
            if ($(".check2").length > 0) {
                $(".cart-list-heard").css("display", "block")
                $(".cart-empty").css("display", "none")
                $(".goods-total").css("display", "block")
            } else {
                $(".cart-list-heard").css("display", "none")
                $(".goods-total").css("display", "none")
                $(".cart-empty").css("display", "block")
            }
        }
        //加减操作
        $(".add").click(function () {
            $(this).parent().parent().parent().parent().parent().parent().prev().children().children(":first").prop("checked", true)
            $(this).parent().parent().parent().children(":first").prop("checked", true)
            $(this).prev().prev().removeClass("unable")
            var add1 = $(this).prev().html();
            add1++;
            $(this).prev().html(add1);
            // parseFloat($(this).parent().parent().next().children().html((parseInt($(this).prev().html())) * parseFloat($(this).parent().parent().prev().html()))).toFixed(2)   
            $(this).parent().parent().next().children().html(parseInt($(this).prev().html()) * parseFloat($(this).parent().parent().prev().html()))
            var num = parseFloat($(this).parent().parent().next().children().html()).toFixed(2)
            $(this).parent().parent().next().children().html(num)
            $(this).parent().parent().parent().parent().parent().parent().next().children().children(":last").html($(this).parent().parent().next().children().html())
            // amountTotal.html($(this).parent().parent().next().children().html())
            // 全选
            Allselect()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            //购物车全部商品
            Allgoods()
            // 被选中的商品
            goods()
        })
        $(".minus").click(function () {
            minus = $(this).next().html();
            minus--;
            if (minus <= 1) {
                minus = 1;
                $(this).addClass("unable")
                // $(this).parent().parent().parent().parent().parent().parent().prev().children().children(":first").prop("checked",false)
                // $(this).parent().parent().parent().children(":first").prop("checked",false)
            } else {
                $(this).parent().parent().parent().parent().parent().parent().prev().children().children(":first").prop("checked", true)
                $(this).parent().parent().parent().children(":first").prop("checked", true)
            }
            $(this).next().html(minus)
            price1 = $(this).parent().parent().prev().html()
            $(this).parent().parent().next().children().html($(this).next().html() * price1)
            amountTotal = $(this).parent().parent().parent().parent().parent().parent().next().children().children(":last")
            amountTotal.html($(this).parent().parent().next().children().html())
            // 全选
            Allselect()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            //购物车全部商
            Allgoods()
            // 被选中的商品
            goods()
        })
        // 点击单个删除按钮
        $(".del").click(function () {
            var id = $(this).attr("id")
            $(this).parent().parent().parent().parent().parent().parent().remove();
            $.ajax({
                type: "GET",
                url: server+"/test/test/zxy/yhd/php/cart-del.php?id=" + id,
                data: {},
                dataType: "json",
                async: true,
                success: function (del) {
                }
            });
            cart()
            // 最终价格
            Allprice()
            //购物车全部商品
            Allgoods()
            // 被选中的商品
            goods()
        })
        // 结算高亮
        function pay_col() {
            for (var i = 0; i < $(".check2").length; i++) {
                if ($(".check2").eq(i).prop("checked")) {
                    $(".pay-btn").css({
                        "background-color": "#ff6c6c"
                    })
                }
            }
        }
        // 批量删除
        function Alldel(){
        $(".delect").click(function () {
            for (var i = 0; i < $(".cart-list").length; i++) {
                if ($(".check2").eq(i).prop("checked")) {
                    var id2=$(".check2").eq(i).attr("id")
                    $(".check2").eq(i).parent().parent().parent().remove()
                    $.ajax({
                        type: "GET",
                        url: server+"/test/test/zxy/yhd/php/cart-del.php?id=" + id2,
                        data: {},
                        dataType: "json",
                        async: true,
                        success: function (del) {
                        }
                    });
                }
           
            //购物车显示与隐藏 
            cart()
            //  已被选中的商品
            goods()
            // 购物车全部商品
            Allgoods() 
        }
        })
    }
        // 复选框
        $(".check2").click(function () {
            // 批量删除
           Alldel()
            if ($(this).prop("checked")) {
                // 结算高亮
                pay_col()
                // 最终价格
                Allprice()
                //  已被选中的商品
                goods()
                $(".pay-btn").css({ "background-color": "#ff6c6c" })
                $(this).parent().parent().next().children().children().children().children(":first").prop("checked", true);
                $(this).parent().parent().next().next().children().children(":last").html($(this).parent().parent().next().children().children().children().children(".item-amount").children().html())
            }
            else {
                $(".pay-btn").css({ "background-color": "#ccc" })
                $(this).parent().parent().next().next().children().children(":last").html(0);
                $(this).parent().parent().next().children().children().children().children(":first").prop("checked", false);
            }
            // 全选
            Allselect()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            //  已被选中的商品
            goods()
        }) 
        $(".check3").click(function () {
             // 批量删除
            Alldel()
            if ($(this).prop("checked")) {
                // 结算高亮
                pay_col()
                // 最终价格
                Allprice()
                //  已被选中的商品
                goods()
                $(".pay-btn").css({ "background-color": "#ff6c6c" })
                $(this).parent().parent().parent().parent().prev().children().children(":first").prop("checked", true)
                $(this).parent().parent().parent().parent().next().children().children(":last").html($(this).parent().children(".item-amount").children().html())
            }
            else {
                $(".pay-btn").css({ "background-color": "#ccc" })
                $(this).parent().parent().parent().parent().next().children().children(":last").html(0)
                $(this).parent().parent().parent().parent().prev().children().children(":first").prop("checked", false)
            }
            // 全选
            Allselect()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            //  已被选中的商品
            goods()
        })
        // 点击全选显示各个商品总价
        function goodsPrice() {
            for (var i = 0; i < $(".check2").length; i++) {
                $(".amount-total").eq(i).html($(".goods-num").eq(i).html() * $(".goods-items-price").eq(i).html())
            }
        }
        // 全选按钮
        $(".check1").click(function () {
            if ($(".check1").prop("checked")) {
                // 点击全选显示商品总价
                goodsPrice()
                // 批量删除
           Alldel()
                $(".pay-btn").css({ "background-color": "#ff6c6c" })
                $(".check4,.check2,.check3").prop("checked", true);
            } else {
                $(".amount-total").html(0)
                $(".pay-btn").css({ "background-color": "#ccc" })
                $(".check4,.check2,.check3").prop("checked", false);
            }
           // 批量删除
           Alldel()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            // 被选中的商品  
            goods()
            // 购物车全部商品   
            Allgoods()
        })
        $(".check4").click(function () {
            if ($(".check4").prop("checked")) {
                // 点击全选显示商品总价
                goodsPrice()
                // 批量删除
           Alldel()
                $(".pay-btn").css({ "background-color": "#ff6c6c" })
                $(".check1,.check2,.check3").prop("checked", true)
                goods()
            } else {
                $(".amount-total").html(0)
                $(".pay-btn").css({ "background-color": "#ccc" })
                $(".check1,.check2,.check3").prop("checked", false)
            }
            // 批量删除
            Alldel()
            // 结算高亮
            pay_col()
            // 最终价格
            Allprice()
            // 被选中的商品
            goods()
            // 购物车全部商品   
            Allgoods()
        })
        // 购物车全部商品
        function Allgoods() {
            var num = 0;
            for (var i = 0; i < $(".check2").length; i++) {
                var num = num + parseInt(($(".goods-num").eq(i).html()));
            }
            $(".Allgoods-number").html(num)
        }
        Allgoods()
        //  已被选中的商品
        function goods() {
            var number = 0;
            for (var i = 0; i < $(".check2").length; i++) {
                if ($(".check2").eq(i).prop("checked")) {
                    var number = number + parseInt($(".goods-num").eq(i).html());
                    $(".goods-number").html(number)
                } else {
                    $(".goods-number").html(number)
                }
            }
        }
        // 全选
        function Allselect() {
            var count = 0;
            for (var i = 0; i < $(".check2").length; i++) {
                if ($(".check2").eq(i).prop("checked")) {
                    count++;
                }
                if (count < $(".check2").length) {
                    $(".check1").prop("checked", false)
                    $(".check4").prop("checked", false)
                }
                else {
                    $(".check1").prop("checked", true)
                    $(".check4").prop("checked", true)
                    // 当全选按钮选中时，删除所有商品
                   // 批量删除
                 alldelect()
                    
                }
            }

        }
        // 最终价格
        function Allprice() {
            var a = 0;
            for (var i = 0; i < $(".check2").length; i++) {
                var a = a + parseFloat($(".amount-total").eq(i).html());
            }
            $(".Allprice").html(a)
        }

        // 点击结算
        var arr=[];
        $(".pay-btn").click(function () {
            if ($(this).css("background-color") == "rgb(255, 108, 108)") {
                for(var i = 0; i < $(".check2").length; i++){
                  if($(".check2").eq(i).prop("checked")==true){
                       var id1=$(".check2").eq(i).attr("id")
                       arr.unshift(id1);
                }  
                }
                location.href = server+"/test/test/zxy/yhd/order.html?arr="+arr;
            
            }
            for (var i = 0; i < $(".check2").length; i++) {
                $(".check2").eq(i).prop("checked", false)
                $(".check3").eq(i).prop("checked", false)
                $(".check1").prop("checked", false)
                $(".check4").prop("checked", false)
            }
        })
    }
})

// 轮播
function onechange(num) {
    $.ajax({
        type: "GET",
        url: sever +"/test/test/zxy/yhd/php/cart.php?page=" + num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".one").get(0).innerHTML += `
 <li>
 <div class="goods">
     <div class="goods-img">
         <a href="#" target="_blank">
             <img src=${data[i].pictureAddress} alt="">
         </a>
         <div class="add-cart">
         <p class="add-cart-inner">
         <i class="iconfont icon-gouwuche"></i>
         <span class="cart-txt" onclick="shopcar(this)" id=${data[i].goodsId}>加入购物车</span>
         </p>
          </div>
          <p class="ok">成功加入</p>
     </div>
     <div class="goods-text">
         <p class="p-pirce">
           ￥
           <b>${data[i].price.substring(1)}</b>
         </p>
         <p class="p-name">
         <a href="#" >${data[i].goodsName}</a>
         
         </p>
     
     </div>
 </div>

</li>
 `
            }
        }
    })
}
onechange(90)

function twochange(num) {
    $.ajax({
        type: "GET",
        url: sever +"/test/test/zxy/yhd/php/cart.php?page=" + num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".two").get(0).innerHTML += `
 <li>
 <div class="goods">
     <div class="goods-img">
         <a href="#" target="_blank">
             <img src=${data[i].pictureAddress} alt="">
         </a>
         <div class="add-cart">
         <p class="add-cart-inner">
         <i class="iconfont icon-gouwuche"></i>
         <span class="cart-txt" onclick="shopcar(this)" id=${data[i].goodsId}>加入购物车</span>
         </p>
          </div>
          <p class="ok">成功加入</p>
     </div>
     <div class="goods-text">
         <p class="p-pirce">
           ￥
           <b>${data[i].price.substring(1)}</b>
         </p>
         <p class="p-name">
         <a href="#" >${data[i].goodsName}</a>
         
         </p>
      
     </div>
 </div>

</li>
 `
            }
        }
    })
}
twochange(120)
function threechange(num) {
    $.ajax({
        type: "GET",
        url: sever +"/test/test/zxy/yhd/php/cart.php?page=" + num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".three").get(0).innerHTML += `
 <li>
 <div class="goods">
     <div class="goods-img">
         <a href="#" target="_blank">
             <img src=${data[i].pictureAddress} alt="">
         </a>
         <div class="add-cart">
         <p class="add-cart-inner">
         <i class="iconfont icon-gouwuche"></i>
         <span class="cart-txt" onclick="shopcar(this)" id=${data[i].goodsId}>加入购物车</span>
         </p>
          </div>
          <p class="ok">成功加入</p>
     </div>
     <div class="goods-text">
         <p class="p-pirce">
           ￥
           <b>${data[i].price.substring(1)}</b>
         </p>
         <p class="p-name">
         <a href="#" >${data[i].goodsName}</a>
         </p>
     </div>
 </div>

</li>
 `
            }
        }
    })
}
threechange(150)
function fourchange(num) {
    $.ajax({
        type: "GET",
        url: sever +"/test/test/zxy/yhd/php/cart.php?page=" + num,
        data: {},
        dataType: "json",
        async: true,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".four").get(0).innerHTML += `
                <li>
                <div class="goods">
                    <div class="goods-img">
                        <a href="#" target="_blank">
                            <img src=${data[i].pictureAddress} alt="">
                        </a>
                        <div class="add-cart">
                        <p class="add-cart-inner">
                        <i class="iconfont icon-gouwuche"></i>
                        <span class="cart-txt" onclick="shopcar(this)" id=${data[i].goodsId}>加入购物车</span>
                        </p>
                         </div>
                         <p class="ok">成功加入</p>
                    </div>
                    <div class="goods-text">
                        <p class="p-pirce">
                          ￥
                          <b>${data[i].price.substring(1)}</b>
                        </p>
                        <p class="p-name">
                        <a href="#" >${data[i].goodsName}</a>
                        
                        </p>
                     
                    </div>
                </div>
               
               </li>
 `
            }
        }
    })
}
fourchange(170)
// 获取用户名id
// sessionStorage.userName = "ceshi";
var userInfo = document.getElementsByClassName("login-txt")[0].children;
var userName = sessionStorage.getItem("userName");
if (userName) {
    var user_ID;
    function getLv() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", sever +"/test/test/zxy/yhd/php/userID.php", true);
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
    console.log(e.parentElement.parentElement.nextElementSibling)
    e.parentElement.parentElement.nextElementSibling.style.display="block";
    setTimeout(function(){
        e.parentElement.parentElement.nextElementSibling.style.display="none";
  },800)
    var member_id = user_ID;
    var time = new Date();
    var timeNow = time.toLocaleDateString();
    var good_id = e.id;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", sever +"/test/test/zxy/yhd/php/add-goods.php?member_id=" + member_id + "&timeNow=" + timeNow + "&good_id=" + good_id, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
        }
    }
}


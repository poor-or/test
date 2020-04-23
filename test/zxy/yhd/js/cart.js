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
// 请求数据
$.ajax({
    type: "GET",
    url: "http://localhost:8081/test/zxy/yhd/php/cart.php",
    data: {},
    dataType: "json",
    async: true,
    success: function (data) {
        for (var i = 0; i < data.length; i++) {
            $(".goods-list").get(0).innerHTML += `
         <li>
         <div class="goods">
             <div class="goods-img">
                 <a href="#" target="_blank">
                     <img src=${data[i].pictureAddress} alt="">
                 </a>
             </div>
             <div class="goods-text">
                 <p class="p-pirce">
                   ￥
                   <b>${data[i].price.substring(1)}</b>
                 </p>
                 <p class="p-name">
                     <a href="#" target="_blank">${data[i].goodsName}</a>
                 </p>
             </div>
         </div>
        
     </li>
         `
        }
    }
})
// 轮播
$("span").click(function(){
    num=$(this).index()
    $("span").removeClass("cire-active")
    $(this).addClass("cire-active");
    console.log(num*(-1000)+"px")
    $(".goods-list").css("margin-left",num*(-1100)+"px")
})
$(".right-arrow").click(function(){
    number=$(".cire-active").index()
    console.log(number)
    $(".goods-list").css("margin-left",(-1100)+"px")
})
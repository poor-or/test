
$(".box").click(function () {
    $(this).toggleClass("block-box");
})
// 顶部固定
$(window).scroll(function(){
   num=$(window).scrollTop();
  if(num>150){
      $(".super-nav").addClass("postion") ;   
}else{
    $(".super-nav").removeClass("postion");  
}
$(".back").click(function(){
    console.log(111)
    $(window).scrollTop=0;
})
})
// 回到固定位置和回到顶部

// 请求数据
var list=document.getElementById("list")
var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        var goods= JSON.parse(xhr1.responseText);
        for (var i = 0; i < goods.length; i++) {         
            list.innerHTML += `
            <li>
            <div class="inner">
                <a href="#" class="pro-img">
                    <img src=${goods[i].pictureAddress} alt="">
                </a>
                <p class="pro-title">
                    <a href="#">${goods[i].goodsName}</a>
                </p>
                <div class="bottom-info">
                    <div class="bottom-con">
                       <p class="sold-num">已售<b>50%</b></p>
                       <div class="process-bar">
                           <i class="process"></i>
                           <div class="process-bg"></div>
                       </div>
                       <div class="pirce-info">
                           <span class="new-pirce">${goods[i].price}</span>
                      <span class="old-pirce">${goods[i].price2}</span>
                         </div>
                    </div>
                </div>
                <a href="#" class="btn" target="_blank">加入购物</a>
            </div>
        </li>
           `
        }
    }
}
xhr1.open("GET", "http://localhost:8081/1号店/php/product.php"  ,true);
xhr1.send();

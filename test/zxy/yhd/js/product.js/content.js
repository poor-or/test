
$(".box").click(function () {
    $(this).toggleClass("block-box");
})
<<<<<<< HEAD
// 固定在顶部
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
    // 和回到顶部
    $(".side-item").click(function () {
        $('html').animate({ scrollTop: '0px' }, 900);
    });
    $(".wait-sell").click(function () {
        $('html').animate({ scrollTop: '0px' }, 900);
    });
    $(".back").click(function () {
        $('html').animate({ scrollTop: '0px' }, 900);
    });
})

// 请求数据
// $.ajax({
//     type:"GET",
//     url:"http://localhost:8081/test/zxy/yhd/product.php",
//     data:{},
//     dataType:"json",
//     async:true,
//     success:function(data){
//         for (var i = 0; i < data.length; i++) {  
//             $(".pro-list").get(0).innerHTML += `
//             <li>
//             <div class="inner">
//                 <a href="#" class="pro-img">
//                     <img src=${data[i].pictureAddress} alt="">
//                 </a>
//                 <p class="pro-title">
//                     <a href="#">${data[i].goodsName}</a>
//                 </p>
//                 <div class="bottom-info">
//                     <div class="bottom-con">
//                        <p class="sold-num">已售<b>50%</b></p>
//                        <div class="process-bar">
//                            <i class="process"></i>
//                            <div class="process-bg"></div>
//                        </div>
//                        <div class="pirce-info">
//                            <span class="new-pirce">${data[i].price}</span>
//                       <span class="old-pirce">${parseInt(data[i].price.substring(1,))+parseInt(data[i].price.substring(1,))}</span>
//                          </div>
//                     </div>
//                 </div>
//                 <a href="#" class="btn" target="_blank">加入购物</a>
//             </div>
//         </li>
//            `
//         }
//     }
// }
function change(num){
$.ajax({
    type: "GET",
    url: "http://localhost:8081/test/zxy/yhd/product.php?page="+num,
    data: {},
    dataType: "json",
    async: true,
    success: function (data) {
    
    }

})
}
// change()

$(".tabs-list1").click(function(){
   change(0)
    console.log(data)
//    for (var i = 0; i < data.length; i++) {  
//                 $(".pro-list").get(0).innerHTML += `
//                 <li>
//                 <div class="inner">
//                     <a href="#" class="pro-img">
//                         <img src=${data[i].pictureAddress} alt="">
//                     </a>
//                     <p class="pro-title">
//                         <a href="#">${data[i].goodsName}</a>
//                     </p>
//                     <div class="bottom-info">
//                         <div class="bottom-con">
//                            <p class="sold-num">已售<b>50%</b></p>
//                            <div class="process-bar">
//                                <i class="process"></i>
//                                <div class="process-bg"></div>
//                            </div>
//                            <div class="pirce-info">
//                                <span class="new-pirce">${data[i].price}</span>
//                           <span class="old-pirce">${parseInt(data[i].price.substring(1,))+parseInt(data[i].price.substring(1,))}</span>
//                              </div>
//                         </div>
//                     </div>
//                     <a href="#" class="btn" target="_blank">加入购物</a>
//                 </div>
//             </li>
//                `
//             }
       
})

 // 抢购中
// $(".tabs-list2").click(function(number){
//     console.log(111)
//     $.ajax({
//         type:"GET",
//         url:"http://localhost:8081/test/zxy/yhd/product.php",
//         data:{ },
//         dataType:"json",
//         async:true,
//         success:function(data1){
//             for(var i=0;i<data1.length;i++){
//                 $(".comming_list").get(0).innerHTML+=`
//                 <li>
//             <div class="inner">
//                 <a href="#" class="pro-img">
//                     <img src=${data1[i].pictureAddress} alt="">
//                 </a>
//                 <p class="pro-title">
//                     <a href="#">${data1[i].goodsName}</a>
//                 </p>
//                 <div class="bottom-info">
//                     <div class="bottom-con">
//                         <p class="sell-num">22:00:00准时开始</p>
//                         <div class="pirce-info sell-pirce">
//                             <span class="new-pirce">${data1[i].price}</span>
//                             <span class="old-pirce">${parseInt(data1[i].price.substring(1,))+parseInt(data1[i].price.substring(1,))}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <a href="#" class="btn" target="_blank">加入购物</a>
//             </div>
//         </li>
//         `
//             }

//         }
//     })
// })
=======
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
>>>>>>> a5d83a073e239da58a7baa43286249437b77f92a

var server="http://localhost:8080"
// 填写地址
$(".box-btn").click(function () {
    $(".area").show();
});

$(".dian").click(function () {
    $(".area").hide();
});
var pho = /^1[3456789]\d{9}$/;
// 保存信息
$(".btn-1").click(function () {
    var a = 0;
    if ($(".name").val() == "") {
        $(".error-name").show()

    } else {
        a++
        $(".error-name").hide()
    }
    if (!pho.test($(".phone").val())) {
        $(".error-phone").show()

    } else {
        a++
        $(".error-phone").hide()
    }
    if ($(".address").val() == "") {
        $(".error-address").show()
    } else {
        a++
        $(".error-address").hide()
    }
    if ($(".email").val() == "") {
        $(".error-email").show()
    } else {
        a++
        $(".error-email").hide()
    }
    if (a >= 4) {
        $(".area").css("display", "none")
        $.ajax({
            type: "GET",
            url: server+"/test/test/zxy/yhd/php/address.php",
            data: {},
            dataType: "json",
            async: true,
            success: function (res) {

            }
        })
    }

})
// 收货地址
$.ajax({
    type: "GET",
    url: server+"/test/test/zxy/yhd/php/get-address.php",
    data: {},
    dataType: "json",
    async: true,
    success: function (address) {
        for (var i = 0; i < address.length; i++) {
            if (address[i].RealName == null) {
                console.log(11)
            } 
            else {
                console.log(2)
                $(".list").get(0).innerHTML += `
      <li class="list-cont">
                 <div class="list-cont-name">
                     <i class="house"></i>
                     <span class="user-name">${address[i].RealName}</span>
                 </div>
                 <div class="detail_info">
                    <p>${address[i].MobileTel}</p>
                    <p>${address[i].Address}</p>
                </div>
             </li>
      `
            }
    }
}
})
// 商品信息
console.log(location.search.substr(5).split(","))
var arr=location.search.substr(5).split(",");
$.ajax({
    type: "GET",
    url: server+"/test/test/zxy/yhd/php/cart-goods.php",
    data: {},
    dataType: "json",
    async: true,
    success: function (res1) {
        for (var i = 0; i < res1.length; i++) {
            for(var j=0;j<arr.length;j++){
             if(res1[i].goodsID==arr[j]){  
                $(".goods-cont").get(0).innerHTML += `
            <div class="goods-list">
            <div class="item clearfix">
                <div class="pay-left">
                    <div class="left-con">
                        <span class="left-top">配送方式</span>
                   <a href="javascript:void(0);" class="left-mothod">第三方配送
                       <i></i>
                   </a>
                    </div>
                </div>
            <div class="goods-right">
                <div class="goods-cont">
                    <div class="goods-title">
                        <b id=${res1[i].goodsID} class="goods-del">商家${res1[i].storeName}</b>
                    </div>
                    <div class="mas-list clearfix">
             <a href="javascript:void(0);" class="goods-img">
                 <img src=${res1[i].pictureAddress} alt="">
             </a>
                   
                    <div class="mas-con">
                        <p class="mas-con-tit">
                        ${res1[i].goodsName}  
                        </p>
                    </div>
                    <div class="price">
                        <span class="goods-price">${res1[i].price}</span>
                        </div>
                        <div class="tips">有货</div>
                </div>
                </div>
            </div>
            </div>
        </div>
            `
            }
        }
        }
        var a = 0;
        for (var i = 0; i < $(".goods-price").length; i++) {
            add = parseInt($(".goods-price").eq(i).html().substr(1))
            a = a + add;
        }
        $(".g-price").html(a)
        $(".All-price").html(a)

        $(".confirm").click(function () {
            $(".mask").css("display", "none");
            $(".refer").css("display", "none");
            for (var i = 0; i < $(".goods-list").length; i++) {
                var id = $(".goods-del").eq(i).attr("id")
                $.ajax({
                    type: "GET",
                    url: server+"/test/test/zxy/yhd/php/pay-success.php?id=" + id,
                    data: {},
                    dataType: "json",
                    async: true,
                    success: function (del) {
                    }
                });
            }
        })
    }

})

// 点击付款，付钱
$("#pay-btn").click(function () {
    $(".mask").css("display", "block");
    $(".refer").css("display", "block");
})

$(".cancel").click(function () {
    $(".mask").css("display", "none");
    $(".refer").css("display", "none");
})



// 三级联动
var selp = document.getElementById("sel1");
var selc = document.getElementById("sel2");
var sela = document.getElementById("sel3");
var opt1 = `
        <option value="-1">--请选择--</option>
        `
var xhr = new XMLHttpRequest();
xhr.open('GET', server+'/test/test/zxy/yhd/php/order-three.php', true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        for (var i = 0; i < data.length; i++) {
            if (data[i].parent_id == 0) {
                selp.innerHTML += `
                            <option value="${data[i].id}">${data[i].name}</option>
                        `
            }
        }
        selp.firstElementChild.setAttribute('selected', 'selected');
        selp.onchange = function () {
            var p = selp.children[selp.selectedIndex].value;
            if (p == -1) {
                selc.innerHTML = sela.innerHTML = opt1;
                selc.style.visibility = "hidden";
                sela.style.visibility = "hidden";
            }
            else {
                selc.innerHTML = sela.innerHTML = opt1;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].parent_id == p) {
                        selc.innerHTML += `
                                <option value="${data[i].id}">${data[i].name}</option>
                                `
                    }
                }
                selc.style.visibility = "visible";
                selc.firstElementChild.setAttribute('selected', 'selected');
                selc.onchange = function () {
                    var c = selc.children[selc.selectedIndex].value;
                    if (c == -1) {
                        sela.innerHTML = opt1;
                        sela.style.visibility = "hidden";
                    }
                    else {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].parent_id == c) {
                                sela.innerHTML += `
                                        <option value="${data[i].id}">${data[i].name}</option>
                                        `
                            }
                        }
                        sela.style.visibility = "visible";
                    }
                };
            }
        };
    }
}

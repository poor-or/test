
var collect = document.getElementById('collect');
var heart = document.getElementById('heart');
var heart1 = document.getElementById('heart1');
var hello = document.getElementById('proImg');
var main = document.getElementById('proImg1');
var big = document.getElementById('J_zoom');
var img = document.getElementById('img');
var promo = document.getElementById('promo');
var fr = document.getElementById('fr');
var close = document.getElementById('close');
window.onload = function () {
    fr.onclick = function () {
        promo.style.display = "block"
    };
    close.onclick = function () {
        promo.style.display = "none"
    }

    collect.onmouseenter = function () {
        heart.style.display = "none";
        heart1.style.display = "block";
        heart1.style.transform = "translateY(-20px)";
    }
    collect.onmouseleave = function () {
        heart.style.display = "block";
        heart1.style.display = "none";
        heart1.style.transform = "translateY(20px)";
    }

}
var add_cart = document.getElementById('add_cart');
var txt = document.getElementById('reduce1');
var reduce = document.getElementById('product_amount');
add.onclick = function () {
    reduce.value++;
};
txt.onclick = function () {
    if (reduce.value > 1) {
        reduce.value--;
    } else {
        reduce.value = 1
    }
}
var add_cart = document.getElementById('add_cart');
var btnbox = document.getElementById('btnbox');
var tab_buy = document.getElementById('tab_buy_info');
add_cart.onmouseenter = function () {
    tab_buy.style.display = "block";
}
add_cart.onmouseleave = function () {

    tab_buy.style.display = "none";
}

var container = document.getElementById('container');
var des_fixed = document.getElementById('des_fixed');
$(function () {
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        console.log(sTop)
        if (sTop >= 1000) {
            if (!$("#des_fixed").is(":visible")) {
                try {
                    $("#des_fixed").slideDown();
                } catch (e) {
                    $("#des_fixed").show();
                }
            }
        }
        else {
            if ($("#des_fixed").is(":visible")) {
                try {
                    $("#des_fixed").slideUp();
                } catch (e) {
                    $("#des_fixed").hide();
                }
            }
        }
    })
});

var string = window.location.search;
var id = string.split("=")[1];
function text(id) {
    var xhr = new XMLHttpRequest();
    var proImg_border = document.getElementById("proImg_border");
    var hideBox = document.getElementById('hideBox');
    var mod_detailInfo = document.getElementById('mod_detailInfo');
    var price5 = document.getElementById('price-pb');
    var dd = document.getElementById('dd');
    var cha_m = document.getElementById('cha_m');
    var box_list = document.getElementById('box_list');
    var explosion = document.getElementById("explosion")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++)
                proImg_border.innerHTML += `
                      <div class="proImg" id="proImg">
                                <div id="proImg1"></div>
                                <img src="${data[i].pictureAddress}" alt="">
                    </div>    
                        `,
                    hideBox.innerHTML += `
                                <div class="mBox" id="mBox">
                                    <b><img src="${data[i].pictureAddress}" alt=""></b>
                                    <b><img src="${data[i].pictureAddress}" alt=""></b>
                                    <b><img src="${data[i].pictureAddress}" alt=""></b>
                                    <b><img src="${data[i].pictureAddress}" alt=""></b>
                                    <b><img src="${data[i].pictureAddress}" alt=""></b>
                                </div>
                         `,
                    mod_detailInfo.innerHTML += `
                        <h1 class="mh" id = "productMainName" >
                            <span class="self_icon">自营</span>${data[i].goodsName}
                        </h1>  
                         `,
                    price5.innerHTML += `
                                <ul>
                                    <li class="tag">价格</li>
                                    <li class="number inte_check">
                                        <span class="current_price">${data[i].price}</span>
                                    </li>
                                </ul>
                          `,
                    dd.innerHTML += `
                                        <div class="item">
                                                <a href="">
                                                    <img src="${data[i].pictureAddress}" alt="" style="width: 30px,height=30px">
                                                    <i>经典36#果 6粒</i>
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="">
                                                    <img src="${data[i].pictureAddress}" alt="" style="width: 30px,height=30px">
                                                    <i>经典36#果 16个礼盒装</i>
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="">
                                                    <img src="${data[i].pictureAddress}" alt="" style="width: 30px,height=30px">
                                                    <i>经典36#果 6粒</i>
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="">
                                                    <img src="${data[i].pictureAddress}" alt="" style="width: 30px,height=30px">
                                                    <i>经典36#果 6粒</i>
                                                </a>
                                            </div>
                                            <div class="item">
                                                <a href="">
                                                    <img src="${data[i].pictureAddress}" alt="" style="width: 30px,height=30px">
                                                    <i>经典36#果 6粒</i>
                                                </a>
                                            </div>
                                        `,
                    cha_m.innerHTML +=
                    `
                            <li>
                                <a href="" class="chaImg">
                                    <img src="${data[i].pictureAddress}" alt="">
                                </a>
                                <p class="cha_tit">
                                    <a href="">${data[i].goodsName}</a>
                                </p>
                                <p class="cha_price">
                                    <a href="">
                                        ¥
                                        <span class="j_price">${data[i].price}</span>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <a href="" class="chaImg">
                                    <img src="${data[i].pictureAddress}" alt="">
                                </a>
                                <p class="cha_tit">
                                    <a href="">${data[i].goodsName}</a>
                                </p>
                                <p class="cha_price">
                                    <a href="">
                                        ¥
                                        <span class="j_price">${data[i].price}</span>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <a href="" class="chaImg">
                                    <img src="${data[i].pictureAddress}" alt="">
                                </a>
                                <p class="cha_tit">
                                    <a href="">${data[i].goodsName}</a>
                                </p>
                                <p class="cha_price">
                                    <a href="">
                                        ¥
                                        <span class="j_price">${data[i].price}</span>
                                    </a>
                                </p>
                            </li>
                            `,
                    box_list.innerHTML += `
                            <ul>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                                <li>
                                    <a href="" class="pro_img">
                                        <img src="${data[i].pictureAddress}" alt="">
                                    </a>
                                    <p class="pro_tit">
                                        <a href="">${data[i].goodsName}</a>
                                    </p>
                                    <p class="pro_price">
                                        <span class="color_red">
                                            <span class="j_price">
                                                ${data[i].price}
                                            </span>
                                        </span>
                                        <a href="" class="commandbtn">查看详情</a>
                                    </p>
                                </li>
                            </ul>
                         `,
                    explosion.innerHTML += `
                           <dt>
                            <i></i>
                            顾客最喜爱商品排行榜
                            </dt>
                           <dd class="bordernone">
                              <span>
                                <a href="" class="pic">
                                    <img src="${data[i].pictureAddress}" alt="" style="width: 115px;height:115px;">
                                </a>
                                <a href="" class="tit1">${data[i].goodsName}</a>
                                <ins><t class="j_price">
                                    ${data[i].price}
                                    </t>
                                </ins>
                                <a href="" class="commandbtn">查看详情</a>
                            </span>
                            <div class="coman"><img src="" alt="">
                            </div>
                        </dd>
                        <dd class="bordernone">
                            <span>
                                <a href="" class="pic">
                                    <img src="${data[i].pictureAddress}" alt="" style="width: 115px;height:115px;">
                                </a>
                                <a href="" class="tit1">${data[i].goodsName}</a>
                                <ins><t class="j_price">
                                    ${data[i].price}
                                    </t>
                                </ins>
                                <a href="" class="commandbtn">查看详情</a>
                            </span>
                            <div class="coman"><img src="" alt="">
                        </dd>
                        <dd class="bordernone">
                            <span>
                                <a href="" class="pic">
                                    <img src="${data[i].pictureAddress}" alt="" style="width: 115px;height:115px;">
                                </a>
                                <a href="" class="tit1">${data[i].goodsName}</a>
                                <ins><t class="j_price">
                                    ${data[i].price}
                                    </t>
                                </ins>
                                <a href="" class="commandbtn">查看详情</a>
                            </span>
                            <div class="coman"><img src="" alt="">
                        </dd>
                        <dd class="bordernone">
                            <span>
                                <a href="" class="pic">
                                    <img src="${data[i].pictureAddress}" alt="" style="width: 115px;height:115px;">
                                </a>
                                <a href="" class="tit1">${data[i].goodsName}</a>
                                <ins><t class="j_price">
                                    ${data[i].price}
                                    </t>
                                </ins>
                                <a href="" class="commandbtn">查看详情</a>
                            </span>
                            <div class="exp_ico">4</div>
                        </dd>
                        <dd class="bordernone">
                            <span>
                                <a href="" class="pic">
                                    <img src="${data[i].pictureAddress}" alt="" style="width: 115px;height:115px;">
                                </a>
                                <a href="" class="tit1">${data[i].goodsName}</a>
                                <ins><t class="j_price">
                                    ${data[i].price}
                                    </t>
                                </ins>
                                <a href="" class="commandbtn">查看详情</a>
                            </span>
                            <div class="exp_ico">5</div>
                        </dd>
                         `
        }
    }
    xhr.open('GET', 'http://localhost:8080/yhd/php/yhd1.php?goodsId=' + id, true);
    xhr.send();
}
text(id)
window.onload = function () {
    hello.onmouseenter = function () {
        main.style.display = "block";
        big.style.display = "block";
    }
    hello.onmouseleave = function () {
        main.style.display = "none";
        big.style.display = "none";
    }
    hello.onmousemove = function () {
        var a = event.clientX - 200;
        var b = event.clientY - 200;
        main.style.left = a + "px"
        main.style.top = b + "px"
        if (a <= 0) {
            main.style.left = 0 + "px"
            a = 0
        }
        if (a >= 200) {
            main.style.left = 200 + "px"
            a = 200
        }
        if (b <= 0) {
            main.style.top = 0 + "px"
            b = 0
        }
        if (b >= 200) {
            main.style.top = 200 + "px"
            b = 200
        }
        img.style.left = a * (-2) + "px"
        img.style.top = b * (-2) + "px"
    }
}
var selp = document.getElementById("sel1");
var selc = document.getElementById("sel2");
var sela = document.getElementById("sel3");
var opt1 = `
        <option value="-1">--请选择--</option>
        `
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'http://localhost:8080/yhd/php/sel.php', true);
xhr2.send();
xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
        var data = JSON.parse(xhr2.responseText);
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

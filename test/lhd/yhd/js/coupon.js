// 点击显示隐藏
var hd = document.getElementById("hd-md")
function duo() {
    if (hd.style.display == "block") {
        hd.style.display = "none"
    } else {
        for (var a = 0; a < hd.length; a++) {
            hd.style.display = "none"
        }
        hd.style.display = "block"
    }
}
// 点击改变颜色
console.log($(".app1 li"))
$(".app1 li").click(function () {
    $(this).addClass('hd-red').siblings().removeClass();
    $(".app1 a").removeClass('hd-white');
    $(".app1 a").eq($(this).index()).addClass('hd-white')
    $(".app2 a").removeClass('hd-white');
    $(".app2 li").removeClass('hd-red');
})
$(".app2 li").click(function () {
    $(this).addClass('hd-red').siblings().removeClass();
    $(".app2 a").removeClass('hd-white');
    $(".app2 a").eq($(this).index()).addClass('hd-white');
    $(".app1 a").removeClass('hd-white');
    $(".app1 li").removeClass('hd-red');
})

// 数据请求
function eat(tuo){
    var ull = document.getElementsByClassName("floor_list")[0];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var movies = JSON.parse(xhr.responseText);
            console.log(movies);
            ull.innerHTML=''
            for (var i = 0; i < movies.length; i++) {
                ull.innerHTML += `
            <li>
                <div class="left_l">
                    <img src="${movies[i].url}">
                    <div class="info selection_info">
                        <div class="price">
                            <div class="price_detail">
                                <em>¥</em>
                                <span>${movies[i].price}</span>
                                <i class="coupon_type">满减券</i>
                            </div>
                        </div>
                        <p class="condition">${movies[i].name}</p>
                        <div class="rule_detail">
                            <span class="tips">${movies[i].name_2}</span>
                        </div>
                        <div class="ticket_get_percent clearfix">
                            <span class="ticket_get">已抢<span
                                    class="ticket_get_p">${movies[i].num}%</span></span>
                            <div class="ticket_get_pe">
                                <div class="ticket_get_per" style="width:${movies[i].num}%;"></div>
                            </div>
                        </div>
                    </div>
                    <span class="tu"></span>
                </div>
                <div class="right_r">
                    <a>
                        <span class="tu_1"></span>
                        <span class="tu_2">免费领取</span>
                    </a>

                </div>
            </li>
                `
            }
        }
    }
    xhr.open('GET', 'http://localhost:8081/coupon.php?value='+tuo, true);
    xhr.send();  
}
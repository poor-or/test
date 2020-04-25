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
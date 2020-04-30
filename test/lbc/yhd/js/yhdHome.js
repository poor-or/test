
var span = document.getElementById("span")
var brand = document.getElementById("brand")
var brand6 = document.getElementById("brand6")
var brandwrap = document.getElementById("brandwrap")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span4 = document.getElementById("span4")
var brand1 = document.getElementById("brand-1")
var mod = document.getElementById("mod-seach")
var hd1 = document.getElementById("hd-1")
var hd2 = document.getElementById("hd-2")
span.onclick = function () {
    if (span.innerHTML == "更多") {
        brand.style.height = "60px"
        span.innerHTML = "收起"
        mod.style.height = "314px";

    } else {
        span.innerHTML = "更多"
        brand.style.height = "37px"
        mod.style.height = "288px"

    }
}
span1.onclick = function () {
    if (span1.innerHTML == "更多") {
        brandwrap.style.height = "284px"
        span1.innerHTML = "收起"
        mod.style.height = "440px"

    } else {
        span1.innerHTML = "更多"
        brandwrap.style.height = "132px"
        mod.style.height = "288px"
    }
}
span2.onclick = function () {
    if (span2.innerHTML == "更多") {
        brand1.style.height = "193px"
        span2.innerHTML = "收起"
        mod.style.height = "440px"
    } else {
        span2.innerHTML = "更多"
        brand1.style.height = "37px"
        mod.style.height = "288px"
    }
}
span4.onclick = function () {
    if (span4.innerHTML == "更多") {
        brand6.style.height = "60px"
        span4.innerHTML = "收起"
        mod.style.height = "314px"
    } else {
        span4.innerHTML = "更多"
        brand6.style.height = "37px"
        mod.style.height = "288px"
    }
}
hd1.onmouseenter = function () {
    hd2.style.display = 'block'
    console.log('鼠标进入')
}
hd1.onmouseleave = function () {
    hd2.style.display = 'none'
    console.log('鼠标离开')
}
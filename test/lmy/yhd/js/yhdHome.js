var server="http://localhost:8080";

var ul = document.getElementById("ul_list");
var ipt = document.getElementById("ipt");
var opt = document.getElementById("txt");
var city = document.getElementById("city");
var block = document.getElementsByClassName("hd_city_sel")[0];
var cTxt = document.getElementById("cityText");
var lett = document.getElementById("letter");
var ele = lett.children;
var cityList = [];
var arr = [];
for (var a = 0; a < ele.length; a++) {
    arr[a] = ele[a].innerHTML;
}
arr.shift()
// ajax获取城市信息
function getCity() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', server+'/test/test/lmy/yhd/city.php', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var span = "";
            for (var i = 0; i < arr.length; i++) {
                span = "";
                for (var j = 0; j < data.length; j++) {
                    if (data[j].cityLetter == arr[i]) {
                        span += `<a href="javascript:void(0);">${data[j].city}</a>`
                    }
                    cityList[j] = data[j].city;
                }
                ul.innerHTML += `<li class="clearfix">
                        <div class="city_screen">${arr[i]}</div>
                        <div class="city_box">${span}</div>
                    </li>`
            }
            sessionStorage.setItem("lists", cityList);
        }
    }
}
getCity()
// 改变城市
var list1 = [];
list1.push(...arr, "热门城市：");
function getText(e) {
    e = window.event;
    var txt = e.target.innerHTML;
    if (list1.indexOf(txt) == -1 && txt.length < 12) {
        cTxt.innerHTML = txt;
        close()
    }

}
// 选择城市显示与隐藏
function close() {
    block.style.display = "none";
    city.parentElement.removeAttribute("style");
    city.previousElementSibling.style.display = "none";
}
city.onclick = function () {
    block.style.display = "block";
    city.parentElement.style.backgroundColor = "#fff";
    city.parentElement.style.borderLeft = "1px solid #dbdbdb";
    city.parentElement.style.borderRight = "1px solid #dbdbdb";
    city.previousElementSibling.style.display = "block";
    event.stopPropagation();
    window.addEventListener("click", function () {
        if (!block.contains(event.target)) {
            close()
        }
    }, false)
}
function cCity() {
    event.stopPropagation();
    close()
}
// 按字母搜索
for (var m = 0; m < ele.length; m++) {
    ele[m].index = m - 1;
    ele[m].onclick = function () {
        if (this.index >= 0) {
            var heightList = [];
            for (var i = 0; i < ul.children.length; i++) {
                ele[i].classList.remove("col");
                heightList[i] = ul.children[i].offsetHeight + 10
            }
            this.classList.add("col");
            var sum = 0;
            for (var j = 0; j < this.index; j++) {
                sum += heightList[j];
            }
            ul.scrollTop = sum;
        }
    }
}
// 搜索框
ipt.onfocus = function () {
    ipt.nextElementSibling.style.display = "block";
    ipt.previousElementSibling.style.display = "none";
    ipt.removeAttribute("placeholder");
}
ipt.onblur = function () {
    ipt.nextElementSibling.style.display = "none";
    ipt.previousElementSibling.style.display = "block";
    ipt.setAttribute("placeholder", "请输入城市名称");
}
// 点击x清楚ipt内容
function clearTxt() {
    ipt.value = "";
}
// 搜索框键入显示城市信息
ipt.addEventListener("compositionstart", function () {
    opt.style.display = "block";
    opt.innerHTML = ipt.value;
}, false)
ipt.addEventListener("compositionupdate", function () {
    opt.style.display = "block";
    opt.innerHTML = ipt.value;
}, false)
ipt.onkeypress = function () {
    compositionupdate()
}
ipt.addEventListener("compositionend", function () {
    opt.style.display = "block";
    opt.innerHTML = ipt.value;
    var optTxt = sessionStorage.getItem("lists").split(",")
    if (optTxt.indexOf(opt.innerHTML) == -1) {
        opt.innerHTML = "";
    }
}, false)
// 点击城市改变
opt.onclick = function () {
    cTxt.innerHTML = opt.innerHTML;
    opt.style.display = "none";
    ipt.value = "";
}

// 登录显示用户名
var userInfo = document.getElementsByClassName("login-txt")[0].children;
var dateTime = new Date();
if (dateTime.getHours() <= 11) {
    userInfo[0].innerHTML = "上午好"
} else if (dateTime.getHours() <= 14) {
    userInfo[0].innerHTML = "中午好"
} else if (dateTime.getHours() <= 20) {
    userInfo[0].innerHTML = "下午好"
} else {
    userInfo[0].innerHTML = "晚上好"
}
var userName = sessionStorage.getItem("userName");
if (userName) {
    userInfo[0].parentElement.style.display = "block";
    userInfo[0].parentElement.previousElementSibling.style.display = "none";
    userInfo[1].children[0].innerHTML = userName;
} else {
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    userInfo[0].parentElement.style.display = "none";
}
function exitUser() {
    userInfo[0].parentElement.style.display = "none";
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    sessionStorage.removeItem("userName");
}


// 轮播
var swi = document.getElementsByClassName("lunbo")[0].children;
var sec = document.getElementById("sec").children;
var x = 0;
for (var i = 0; i < sec.length; i++) {
    sec[i].index = i;
    sec[i].onmouseenter = function () {
        for (var j = 0; j < swi.length; j++) {
            swi[j].children[0].style.opacity = 0;
            sec[j].style = ""
        }
        swi[this.index].children[0].style.opacity = 1;
        x = this.index;
        this.style.backgroundColor = "#333"
        this.style.color = "#fff"
    }
}
setInterval(function () {
    x++;
    if (x == 3) {
        x = 0;
    }
    sec[x].onmouseenter()
}, 3000)

// 顶部固定和回顶部,滚动到底部请求数据
var hdNav = document.getElementsByClassName("hd-fixed")[0];
var toTop = document.getElementById("to-top");
var goods_list = document.getElementById("goods_list");
var times = 0;
var scrTime = 0;
window.onscroll = function () {
    if (this.scrollY > 651) {
        hdNav.style.display = "block";
    }
    else {
        hdNav.style.display = "none";

    }
    if (this.scrollY > 495) {
        toTop.parentElement.style.position = "fixed";
        toTop.parentElement.style.top = "156px";
    }
    else {
        toTop.parentElement.style = "";
    }
    if (this.scrollY > 1637) {
        toTop.style.display = "block";
    }
    else {
        toTop.style.display = "none";
    }
    toTop.onclick = function () {
        document.documentElement.scrollTop = 0;
    }
    var src_h = document.documentElement.children[1].offsetHeight - window.scrollY;

    if (src_h < 900) {
        
        scrTime++;
        if (scrTime > 1) {
            times += 80;
            goods_list.parentElement.nextElementSibling.style.display="block";
        }
        if (times <= 80) {
            getGoods(times);
        }else{
            goods_list.parentElement.nextElementSibling.style.display="none";
        }
    }
}
// 异步请求加载数据
function getGoods(times = 0) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', server+'/test/test/lmy/yhd/goods.php?page=' + times, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < 40; i++) {
                goods_list.innerHTML += `
                <li>
                    <a class="clearfix goods-file" href="">
                        <img src="${data[i].pictureAddress}" alt="">
                        <p>${data[i].goodsName}</p>
                        <span>${data[i].price}</span>
                    </a>
                    <div class="mask">
                        <a class="one" href=""><i class="iconfont icon-iconset11"></i></a>
                        <a class="last" href="">找相似</a>
                    </div>
                </li>
                `
            }
            // 超级单品更新商品
            var super_list = document.getElementById("super-good");
            if(super_list.children.length<=1){
                for(var j=0;j<9;j++){
                    var set_time=Math.floor(Math.random()*40)
                    var pri=parseFloat(data[set_time].price.substr(1,data[set_time].price.length))+50;
                    super_list.innerHTML+=`
                    <li>
                        <a href="">
                            <div class="single-top">
                                <img src="${data[set_time].pictureAddress}" alt="">
                            </div>
                            <div class="single-bot">
                                <p>${data[set_time].goodsName}</p>
                                <span class="single-line"><i></i></span>
                                <span class="original-price">${data[set_time].price}</span><span class="Present-price">￥${pri}</span>
                            </div>
                        </a>
                    </li>
                    `
                }
            }
            
            setInterval(function() {
                for(var j=0;j<9;j++){
                    var set_time=Math.floor(Math.random()*40)
                    var pri=parseFloat(data[set_time].price.substr(1,data[set_time].price.length))+50;
                    super_list.children[j+1].innerHTML=`
                        <a href="">
                            <div class="single-top">
                                <img src="${data[set_time].pictureAddress}" alt="">
                            </div>
                            <div class="single-bot">
                                <p>${data[set_time].goodsName}</p>
                                <span class="single-line"><i></i></span>
                                <span class="original-price">${data[set_time].price}</span><span class="Present-price">￥${pri}</span>
                            </div>
                        </a>
                    
                    `
                }
            },10800000)
        }
    }
}
getGoods()



// 超级品牌倒计时
window.onload = function () {
    setInterval(function () {
        var timeNow = new Date();
        var time = timeNow.getSeconds();
        var minute = timeNow.getMinutes();
        var hours = timeNow.getHours();
        var h = document.getElementById("djs-clock").children[0];
        var m = document.getElementById("djs-clock").children[1];
        var s = document.getElementById("djs-clock").children[2];
        var num = ["02", "01", "00"];
        hours > 12 ? hours -= 12 : hours;
        h.innerHTML = num[hours % 3];
        60 - minute < 10 ? m.innerHTML = "0" + (60 - minute) : m.innerHTML = 60 - minute;
        60 - time < 10 ? s.innerHTML = "0" + (60 - time) : s.innerHTML = 60 - time;
    }, 1000)
}

// 甄选右边分页
function prev(e) {
    e = window.event.target;
    ul_list = e.parentElement.previousElementSibling.children[0];
    if (parseInt(ul_list.style.left) < 5) {
        ul_list.style.left = parseInt(ul_list.style.left) + 100 + "px"
    }
}
function next(e) {
    e = window.event.target;
    ul_list = e.parentElement.previousElementSibling.previousElementSibling.children[0];
    if (parseInt(ul_list.style.left) > -195) {
        ul_list.style.left = parseInt(ul_list.style.left) - 100 + "px"
    }
}


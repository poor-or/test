
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
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8081/city.php', true);
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
    userInfo[1].innerHTML = userName;
} else {
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    userInfo[0].parentElement.style.display = "none";
}
function exitUser() {
    userInfo[0].parentElement.style.display = "none";
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
}



// 顶部固定和回顶部
var backtop = document.getElementById("hd-fixed");
window.onscroll = function () {
    if (this.scrollY < 4600&&this.scrollY>100) {
        backtop.style.display = "block";
    }
    else {
       backtop.style.display = "none"; 
    } 
}

// 超级品牌倒计时
window.onload=function() {
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
        60-minute<10?m.innerHTML="0"+(60-minute):m.innerHTML=60-minute;
        60-time<10?s.innerHTML="0"+(60-time):s.innerHTML=60-time;
    }, 1000)
}
// 点击变色

//  window.onload=function(){
    var hdfixed=document.getElementById("hd-fixed")[0]
    hdfixed.click=function (){
    // var clo1= document.getElementById("clo1");
    // var col2= document.getElementById("clo2");
    // var col3= document.getElementById("clo3");
        this.style.color="#FF4040";
        this.style.backgroundColor="red";
        console.log(11)
    }
// }
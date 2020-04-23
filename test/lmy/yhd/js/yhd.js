var ul = document.getElementById("ul_list");
var ipt = document.getElementById("ipt");
var opt = document.getElementById("txt");
var city = document.getElementById("city");
var block = document.getElementsByClassName("hd_city_sel")[0];
var cTxt = document.getElementById("cityText");
var lett = document.getElementById("letter");
var vipCard = document.getElementById("swi-card");
var ele = lett.children;
var cityList = [];
var arr = [];

for (var a = 0; a < ele.length; a++) {
    arr[a] = ele[a].innerHTML;
}
arr.shift()
// ajax获取城市信息
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/test/test/lmy/yhd/city.php', true);
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
sessionStorage.userName = "李四";
var userInfo = document.getElementsByClassName("login-txt")[0].children;
var userName = sessionStorage.getItem("userName");
var userName1 = document.getElementsByClassName("userName")[0];
var loginInfo = document.getElementsByClassName("vip-login")[0];
var big = document.getElementById("big").children;
var font = document.getElementById("font").children;

if (userName) {
    // 查询用户等级
    // var userLv=0;
    function getLv() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/test/test/lmy/yhd/user.php", true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                for(var i=0;i<data.length;i++){
                    if(data[i].MemberName==userName){
                        var userLv=data[i].level;
                        var lvList=[3,3,5,6,7,7];
                        console.log(userLv)
                        for(var j=0;j<lvList[userLv-1];j++){
                            big[userLv-1].onclick();
                            for(var k=0;k<7;k++){
                                if(vipCard.children[k].dataset.lv==j+1){
                                    vipCard.children[k].style="background:url(./img/imgs/vip/get-bg.jpg) no-repeat;background-size: 100% 100%;";
                                    vipCard.children[k].children[1].children[1].style.display="none";
                                    vipCard.children[k].children[1].children[2].style.display="block";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    getLv();
    userInfo[0].parentElement.previousElementSibling.style.display = "none";
    userInfo[0].parentElement.style.display = "block";
    userInfo[1].innerHTML = userName;
    userInfo[3].children[0].children[1].innerHTML = userName;
    loginInfo.style.display = "block";
    loginInfo.nextElementSibling.style.display = "none";
    userName1.children[0].innerHTML = userName;

} else {
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    userInfo[0].parentElement.style.display = "none";
    loginInfo.style.display = "none";
    loginInfo.nextElementSibling.style.display = "block";
}
function exitUser() {
    userInfo[0].parentElement.style.display = "none";
    userInfo[0].parentElement.previousElementSibling.style.display = "block";
    loginInfo.style.display = "none";
    loginInfo.nextElementSibling.style.display = "block";
    sessionStorage.removeItem("userName");
}

// 点击放大

for (var i = 0; i < big.length; i++) {
    big[i].className = "small";
    big[0].classList.add("big");
    big[i].index = i;
    big[i].onclick = function () {
        for (var j = 0; j < big.length; j++) {
            big[j].classList.remove("big")
        }
        this.classList.add("big");
        if (this.index == 0) {
            for (var k = 0; k < 3; k++) {
                font[k].children[0].className = "col";
            }
            for (var k = 6; k >= 3; k--) {
                font[k].children[0].className = "";
            }
        }
        if (this.index == 1) {
            for (var k = 0; k < 3; k++) {
                font[k].children[0].className = "purple";
            }
            for (var k = 6; k >= 3; k--) {
                font[k].children[0].className = "";
            }
        }
        if (this.index == 2) {
            for (var k = 0; k < 5; k++) {
                font[k].children[0].className = "green";
            }
            font[5].children[0].className = "";
            font[6].children[0].className = "";
        }
        if (this.index == 3) {
            for (var k = 0; k < 6; k++) {
                font[k].children[0].className = "modena";
            }
            font[6].children[0].className = "";
        }
        if (this.index == 4) {
            for (var k = 0; k < font.length; k++) {
                font[k].children[0].className = "col";
            }
        }
    }
}


// 特权轮播

var swiIntro = document.getElementById("swi-intro1").children;
var swiCard = vipCard.children;
for (var i = 0; i < swiIntro.length; i++) {
    swiIntro[i].onclick = function () {
        for (var j = 0; j < swiIntro.length; j++) {
            swiIntro[j].className = "";
        }
        this.parentElement.style.left = -94 * this.dataset.index + "px"
        for (var k = 2; k < 9; k++) {
            if (swiIntro[k].dataset.index == this.dataset.index) {
                swiIntro[k].className = "active";
            }

        }
        swiCard[this.dataset.index].onclick()
    }
}
var arrCard = [1, 2, 3, 4, 5, 6, 7]
var j = 0
for (var a = 0; a < swiCard.length; a++) {
    swiCard[a].index = a;
    swiCard[a].onclick = function () {
        j = this.index
        var arrCard1 = []
        var arrCard2 = []
        for (var m = 0; m < 7 - this.index; m++) {
            arrCard1.push(arrCard[m])
        }
        for (var n = 0; n < 7; n++) {
            if (arrCard1.indexOf(arrCard[n]) == -1) {
                arrCard2.push(arrCard[n])
            }
        }
        arrCard1 = [...arrCard2, ...arrCard1]
        for (var b = 0; b < arrCard1.length; b++) {
            swiCard[b].className = "card-" + arrCard1[b]
        }
        swiIntro[this.index + 2].onclick()
    }
}
// 自动轮播
setInterval(function() {
    cardNext();
},5000)
// 点击按钮轮播
function cardPre() {
    j--
    if (j < 0) {
        j = 6
    }
    swiCard[j].onclick()
}
function cardNext() {
    j++
    if (j > 6) {
        j = 0
    }
    swiCard[j].onclick()
}


pattUser = /^[\w \u4e00-\u9fa5]{4,20}$/;
pattPhone = /^[0-9]{11}$/;
pattPsd = /^.{6,20}$/;
var arr = [];
var num = 0;
// 用户名
$("#user").focus(function () {
    $(".user-block").css("display", "block");
    $(".user-block1").css("display", "block");
    $(this).removeAttr("placeholder");
    $(".user-block1").siblings().css("display", "none")
});
// 用户名失去焦点
$("#user").blur(function () {
    console.log($("h1").text());
    if ($(this).val() == "") {
        $("#userblank").css("display", "block");
        $("#userblank").siblings().css("display", "none")
    } else {
        if (!pattUser.test($(this).val())) {
            $("#user-bg").css("display", "block")
            $("#user-bg").siblings().css("display", "none")
        }        
        else {

            $("#cirUser").css("display", "block");
            $("#cirUser").siblings().css("display", "none");
            num++;
            arr.unshift(num);

        }
    }
})
//     var number=$.inArray("$(this).val()", data)
// if(number>-1){
//     console.log("数据存在")
// } else {
//     console.log("数据不存在")
// }
// $("#user").blur(function () {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText);
//             console.log(data)

//         }

//     }

//     xhr.open("GET", "http://localhost:8081/1号店/php/sign.php", true);
//     xhr.send();
// })
// 手机号
$("#phone").focus(function () {
    $(".phone-block").css("display", "block");
    $(".phone-block1").css("display", "block");
    $(this).removeAttr("placeholder");
    $(".phone-block1").siblings().css("display", "none")
})
$("#phone").blur(function () {
    // $(".item-user").css("border","1px solid red")
    if ($(this).val() == "") {
        $("#phone-bg").css("display", "block");
        $("#phone-bg").siblings().css("display", "none")
    } else {
        if (!pattPhone.test($(this).val())) {
            $("#phone-bg").css("display", "block");
            $("#phone-bg").siblings().css("display", "none")
        }
        else {
            $("#cirPhone").css("display", "block");
            $("#cirPhone").siblings().css("display", "none")
            num++
            arr.unshift(num);

        }
    }
})
// 短信验证码
$("#news").focus(function () {
    $(".new-block").css("display", "block");
    $(".new-block1").css("display", "block");
    $(this).removeAttr("placeholder");
    $(".new-blocke1").css("display", "none")
})
$("#news").blur(function () {
    $(".new-block1").css("display", "none");
})
a = /^[a-z]{6,20}$/;
c = /^[A-Z]{6,20}$/;
b = /^[0-9]{6,20}$/;
// 设置密码
$("#psd").focus(function () {
    $(".psd-block").css("display", "block");
    $(".psd-block1").css("display", "block");
    $(this).removeAttr("placeholder");
    $(".psd-block1").siblings().css("display", "none")
})
$("#psd").blur(function () {
    if ($(this).val() == "") {
        $("#psdblank").css("display", "block");
        $("#psdblank").siblings().css("display", "none")
    } else {
        if (a.test($(this).val())) {
            $("#psd-bg").css("display", "block")
            $("#psd-bg").text("密码不能全为字母,请包含至少一个数字或字母");
            $("#psd-bg").css({ 'width': '160px', 'height': '40px', 'line-height': '20px' })
            $("#psd-bg").siblings().css("display", "none")
        }
        else if (c.test($(this).val())) {
            $("#psd-bg").css("display", "block")
            $("#psd-bg").text("密码不能全为字母,请包含至少一个数字或字母");
            $("#psd-bg").css({ 'width': '160px', 'height': '40px', 'line-height': '20px' })
            $("#psd-bg").siblings().css("display", "none")
        }
        else if (b.test($(this).val())) {
            $("#num").css("display", "block")
            $("#num").siblings().css("display", "none")
        }
        // else if(txt.indexOf(" ")!=-1){
        //     console.log(txt.indexOf(" "))
        //     $("#num").text("密码不允许有空格");
        // }
        else if (pattPsd.test($(this).val())) {
            $("#cirPsd").css("display", "block");
            $("#cirPsd").siblings().css("display", "none")
            num++
            arr.unshift(num);
        }
        else {
            $("#psd-bg").css("display", "block")
            $("#psd-bg").siblings().css("display", "none")

        }
    }
})
// 确认密码
$("#psd1").focus(function () {
    $(".psd1-block").css("display", "block");
    $(".psd1-block1").css("display", "block");
    $(this).removeAttr("placeholder");
    $(".psd1-block1").siblings().css("display", "none")
})
$("#psd1").blur(function () {
    if ($(this).val() == "") {
        $("#psd1-bg").css("display", "block");
        $("#psd1-bg").siblings().css("display", "none")
    }
    else {
        if ($("#psd").val() == $(this).val()) {
            $("#cirPsd1").css("display", "block")
            $("#cirPsd1").siblings().css("display", "none")
            num++
            arr.unshift(num);
        } else {
            $("#psd1-bg").css("display", "block");
            $("#psd1-bg").siblings().css("display", "none")
        }
    }
})
// 点击按钮
$("#login").click(function () {
    if ($("#user").val() == '') {
        $("#userblank").css("display", "block");
    }
    if ($("#phone").val() == '') {
        $("#phone-bg").css("display", "block");
    }
    if ($("#psd").val() == '') {
        $("#psdblank").css("display", "block");
    }
    if ($("#psd1").val() == '') {
        $("#psd1-bg").css("display", "block");
    }
    else if (arr.length >= 4) {
        location.href = 'login.html';
       
    }
})
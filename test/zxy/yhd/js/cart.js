// 登录显示用户名
var userInfo=document.getElementsByClassName("login-txt")[0].children;
var userName=sessionStorage.getItem("userName");
if(userName){
    userInfo[0].parentElement.previousElementSibling.style.display="none";
    userInfo[0].parentElement.style.display="block";
    userInfo[1].innerHTML=userName;
    userInfo[3].children[0].children[1].innerHTML=userName;
}else{
    userInfo[0].parentElement.previousElementSibling.style.display="block";
    userInfo[0].parentElement.style.display="none";
}
function exitUser() {
    userInfo[0].parentElement.style.display="none";
    userInfo[0].parentElement.previousElementSibling.style.display="block";
}
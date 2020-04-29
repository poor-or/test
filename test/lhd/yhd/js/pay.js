var inp=document.getElementById('crm-tel');
var tel=document.getElementsByClassName('tel-info')[0]
console.log(tel)
inp.onclick=function(){
    inp.style.border="1px solid red"
}

inp.onkeyup=function(){
    var app= inp.value
    console.log(app)
    var patt= /^[1][0-9]{10}$/
    if(patt.test(app)){
        tel.style.display="none"
    }else{
        tel.style.display="block"
    }
}
console.log($('.crm-ul li'))
$('.crm-ul li').click(function(){
    
    $(this).css('border','1px solid red').siblings().css('border','1px solid #dedede')
})
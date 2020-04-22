$('.cn-btn span').click(function(){
    $(this).addClass('btn-color').siblings().removeClass();
    $('.cn-img').css('left',-$(this).index()*636+'px');
    console.log(-$(this).index()*636);
});
var n=0;
function next() {
    n++;
    if(n==2){
        n=0
    };
    $('.cn-img').css('left','-'+n*636+'px');
    $('.cn-btn span').eq(n).addClass('btn-color').siblings().removeClass();    
};
function auto(){
    timer=setInterval(next,4000);
};
auto();
$(".cn-cn").mouseover(function(){
    clearInterval(timer);
});
$(".cn-cn").mouseleave(function(){
    auto();
});

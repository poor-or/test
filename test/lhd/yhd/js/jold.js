$('.cn-btn span').click(function(){
    $(this).addClass('btn-color').siblings().removeClass()
    $('.cn-img').css('left',-$(this).index()*636+'px')
})
var n=0;
function auto(){
    timer=setInterval(function(){
        n++;
        if(n>1){
            n=0
        }
        $('.cn-img').css('left','-'+n*636+'px')    
    },4000)
}
auto()
$(".cn-btn").mouseover(function(){
    clearInterval(timer);
})
$(".container").mouseleave(function(){
    auto()
})
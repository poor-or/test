window.onload=function(){
        var input=this.document.getElementsByClassName("bd_centre_left_tab");
        var none=this.document.getElementsByClassName("right_block");
        for( var i=0;i<input.length;i++){
            input[i].index=i;
            this.console.log(index)
            input[i].onclick=function(){
                for(var j=0;j<input.length;j++){
                    input[i].className=""
                }
                for(var i=0;i<none.length;i++){
                    none[i].style.display='none'
                }
                input[this.index].className="active"
                none[this.index].style.display="block"
            }
        }
}
var app = document.getElementsByClassName('tabb')
var h3 = document.getElementsByTagName('h3')
console.log(app)
function tab(i) {
        if (app[i].style.display == "block") {
            app[i].style.display = "none"
            h3[i].classList.remove("on")
            h3[i].classList.remove("one")
        } else {
            for (var a = 0; a < app.length; a++) {
                app[a].style.display = "none"
                h3[a].classList.remove("one")
                h3[a].classList.remove("on")
            }
            app[i].style.display = "block"          
            h3[i].classList.add("on")   
            h3[i].classList.add("one")  
        }
}


var app = document.getElementsByClassName('tabb')
var h3 = document.getElementsByTagName('h3')
console.log(app)
function tab(i) {
        if (app[i].style.display == "block") {
            app[i].style.display = "none"
            h3[i].classList.remove("on")
        } else {
            app[i].style.display = "block"
            h3[i].classList.add("on")
        }
}


window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY + "px)";
})

const btncontainer = document.querySelector(".burger_container");
const btnmenu = document.querySelector(".burger_menu");
let menuOpen = false;
btncontainer.addEventListener("click", function(){
    if(!menuOpen){
        btncontainer.classList.add("open");
        btnmenu.classList.add("open");
        menuOpen = true;
    }
    else{
        btncontainer.classList.remove("open");
        btnmenu.classList.remove("open");
        menuOpen = false;
    }
})
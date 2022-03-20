window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY * 0.7 + "px)";
})

window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax2");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + -offsetY * 0.3 + "px)";
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);
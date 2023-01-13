let myBullets = document.querySelectorAll(".bullets li");
let myText = document.querySelectorAll(".text-wrapper h1");

let navOffset = document.querySelector("header .navbar");




//Remove Class Active From Bullets

myBullets.forEach(function(ele){
  ele.onclick = function(){
    myBullets.forEach(function(e){
      e.classList.remove("active_Bullet");
    });
    this.classList.add("active_Bullet");
  }
})



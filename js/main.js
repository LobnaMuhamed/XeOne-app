let myBullets = document.querySelectorAll(".bullets li");
let myText = document.querySelectorAll(".text-wrapper h1");

// Change Text Of Landing Page





//Remove Class Active From Bullets

myBullets.forEach(function(ele){
  ele.onclick = function(){
    myBullets.forEach(function(e){
      e.classList.remove("active_Bullet");
      

    });
    this.classList.add("active_Bullet");
  }
})


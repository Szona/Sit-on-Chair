document.addEventListener("DOMContentLoaded", function(){
    
   //console.log('działam'); 
    
    function dropDownMenu() {
        
      var menu = document.querySelectorAll(".center> ul >li");
    
   for (var i = 0; i < menu.length; i++) {
        
        menu[i].addEventListener("mouseover", function(event){
           
           var dropDown = this.querySelector("ul");
            
            if (dropDown != null) {
                
                 dropDown.style.display= "block";
                }
                
            });

        
        menu[i].addEventListener("mouseout", function(event){
            
            var dropDown = this.querySelector("ul");
            
            if (dropDown != null) {
                
                 dropDown.style.display= "none";
                }
                
            });        
         }
    }
    dropDownMenu();
    
    function hideChairName() {
        
        var img1 = document.querySelector(".img1");
        
        
        img1.addEventListener("mouseover", function mouseOver(event){
            img1.classList.remove("chair-name");
            
        });
        
        img1.addEventListener("mouseleave", function mouseOver(event){
            img1.classList.add("chair-name");
            
        });
        
        var img2 = document.querySelector(".img2");
    
        
        img2.addEventListener("mouseover", function mouseOver(event){
            img2.classList.remove("chair-name-2");
            
        });
        
        img2.addEventListener("mouseleave", function mouseOver(event){
            img2.classList.add("chair-name-2");
            
        });
    }
    hideChairName();
    
    function slider() {
        
        
  var next = document.querySelector(".right");
  var prev = document.querySelector(".left");
  var images = document.querySelectorAll(".slider li");
  var imageCount = 0;
    
    console.log(next);
    console.log(prev);
    console.log(images);
    console.log(imageCount);
    
    images[imageCount].classList.add('visible');
    

    next.addEventListener("click", function(event){
        
        console.log("click");
        
        images[imageCount].classList.remove('visible');
        
        imageCount ++;
        
        if (imageCount >= images.length) {
            imageCount = 0;
        }
        
        images[imageCount].classList.add('visible');
        
        });
    
    

    prev.addEventListener("click", function(event){
        
        console.log("click");
        
        images[imageCount].classList.remove('visible');
        
        imageCount --;
        
        if (imageCount < 0) {
            imageCount = images.length - 1;
        }
        
        images[imageCount].classList.add('visible');
        
        
        });
    }
    
    slider();
});
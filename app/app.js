document.addEventListener("DOMContentLoaded", function(){
    
   //console.log('działam'); 
    
    function dropDownMenu() {
        
        var menu = document.querySelector(".dropdown");
        
            
        menu.addEventListener("mouseover", function mouseOver(event){
            var menuContent = document.querySelector(".dropdown-content"); 
            menuContent.style.display="block";
            
        });
        
        menu.addEventListener("mouseleave", function mouseOver(event){
            var menuContent = document.querySelector(".dropdown-content"); 
            menuContent.style.display="none";
            
        });
        
        
    }
    dropDownMenu();
    
    function hideChairName() {
        
        var img1 = document.querySelector(".img1");
        console.log(img1);
        
        img1.addEventListener("mouseover", function mouseOver(event){
            img1.classList.remove("chair-name");
            
        });
        
        img1.addEventListener("mouseleave", function mouseOver(event){
            img1.classList.add("chair-name");
            
        });
        
        var img2 = document.querySelector(".img2");
        console.log(img2);
        
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
        
        imageCount = imageCount + 1;
        
        images[imageCount].classList.add('visible');
        
        if (imageCount === images.length -1) {
            
            imageCount = imageCount + 1;
        }
         
       
        
        
    })
    
    

    prev.addEventListener("click", function(event){
        
        console.log("click");
        
        images[imageCount].classList.remove('visible');
        
       
        
        imageCount = imageCount - 1;
        
        images[imageCount].classList.add('visible');
        
        if (imageCount == 0) {
            
           
        }
        


    });
    }
    
    slider();
});
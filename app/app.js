document.addEventListener("DOMContentLoaded", function() {
    function dropDownMenu() {

        var menu = document.querySelectorAll(".center> ul >li");

        for (var i = 0; i < menu.length; i++) {

            menu[i].addEventListener("mouseover", function(event) {

                var dropDown = this.querySelector("ul");

                if (dropDown != null) {

                    dropDown.style.display = "block";
                }

            });


            menu[i].addEventListener("mouseout", function(event) {

                var dropDown = this.querySelector("ul");

                if (dropDown != null) {

                    dropDown.style.display = "none";
                }

            });
        }
    }
    dropDownMenu();

    function hideChairName() {

        var img1 = document.querySelector(".img1");


        img1.addEventListener("mouseover", function mouseOver(event) {
            img1.classList.remove("chair-name");

        });

        img1.addEventListener("mouseleave", function mouseOver(event) {
            img1.classList.add("chair-name");

        });

        var img2 = document.querySelector(".img2");


        img2.addEventListener("mouseover", function mouseOver(event) {
            img2.classList.remove("chair-name-2");

        });

        img2.addEventListener("mouseleave", function mouseOver(event) {
            img2.classList.add("chair-name-2");

        });
    }
    hideChairName();

    function slider() {


        var next = document.querySelector(".right");
        var prev = document.querySelector(".left");
        var images = document.querySelectorAll(".slider li");
        var imageCount = 0;

        //console.log(next);
        //console.log(prev);
        //console.log(images);
        //console.log(imageCount);

        images[imageCount].classList.add('visible');


        next.addEventListener("click", function(event) {

            //console.log("click");

            images[imageCount].classList.remove('visible');

            imageCount++;

            if (imageCount >= images.length) {
                imageCount = 0;
            }

            images[imageCount].classList.add('visible');

        });



        prev.addEventListener("click", function(event) {

            //console.log("click");

            images[imageCount].classList.remove('visible');

            imageCount--;

            if (imageCount < 0) {
                imageCount = images.length - 1;
            }

            images[imageCount].classList.add('visible');


        });
    }

    slider();

    function select() {

        var subMenu = document.querySelectorAll(".list_arrow");
        console.log(subMenu);

        var list_panel = document.querySelectorAll(".list_panel");

        var options = document.querySelectorAll(".list_panel li");
        console.log(options);

        var selectedChair = document.querySelector(".title-sum");
        console.log(selectedChair);

        var chairValue = document.querySelector(".panel_right h4");
        console.log(chairValue);

        var selectedColor = document.querySelector(".color");
        console.log(selectedColor);

        var colorValue = document.querySelector(".panel_right .color");
        console.log(chairValue);

        var selectedPattern = document.querySelector(".pattern");
        console.log(selectedColor);

        var patternValue = document.querySelector(".panel_right .pattern");
        console.log(chairValue);

        var transportCheckBox = document.querySelector("#transport");
        console.log(transport);

        var transportSelected = document.querySelector(".transport");
        console.log(transportSelected);

        var transportValue = document.querySelector(".panel_right .transport");



        for (var i = 0; i < subMenu.length; i++) {

            subMenu[i].addEventListener("click", function onclick (event){



                if (this.nextElementSibling.style.display == "block") {
                  this.nextElementSibling.style.display="none";
                } else {
                  this.nextElementSibling.style.display="block";
                }

            });


              for (var j = 0; j < options.length; j ++) {

                  options[j].addEventListener("click", function onclick (event){
                    this.parentNode.style.display="none";

                    if ( this.dataset.id === selectedChair.dataset.id && chairValue.dataset.id === this.dataset.id && chairValue.dataset.id === selectedChair.dataset.id) {

                      selectedChair.innerText = "Chair " + this.innerText;
                      chairValue.innerText = this.dataset.price;
                    }

                    if ( this.dataset.id === selectedColor.dataset.id && colorValue.dataset.id === this.dataset.id && colorValue.dataset.id === selectedColor.dataset.id) {

                        selectedColor.innerText = this.innerText;
                        colorValue.innerText = this.dataset.price;
                    }

                    if ( this.dataset.id === selectedPattern.dataset.id && patternValue.dataset.id === this.dataset.id && patternValue.dataset.id === selectedPattern.dataset.id) {

                      selectedPattern.innerText = this.innerText;
                      patternValue.innerText = this.dataset.price;
                    }


                    if (transportCheckBox.type == "checked") {
                      transportSelected.innerText = "transport";
                    }





                  });

              }
            }






    }
    select();

});

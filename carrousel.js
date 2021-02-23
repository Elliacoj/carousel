let Carrousel = function(array, name, add, width, height, numberImage, button = true, direct = "left") {
    this.array = array;
    this.name = name;
    this.number = numberImage;

    this.createCarrousel = function() {
        let container = document.createElement("div");
        container.id = this.name;
        container.id = this.name;
        add.append(container);

        for(let x = 0; x <  this.number + 4; x++) {
            let div = document.createElement("div");
            container.append(div);
        }

        for(let x = 0; x < this.number + 4; x++) {
            if(x < this.number + 2) {
                container.children[x].className = this.name;
            }
            else {
                container.children[x].className = "button" + this.name;
            }
        }

        let nameButton = "button" + this.name;
        let divChild = document.getElementsByClassName(this.name);
        let divButton = document.getElementsByClassName(nameButton);
        container.style.width = width;
        container.style.height = height;
        container.style.overflow = "hidden";
        container.style.position = "relative";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundColor = "white";
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";

        if(direct === "left" || direct === "right") {
            for(let x = 0; x < this.number + 2; x++) {
                divChild[x].style.position = "absolute";
                divChild[x].style.backgroundPosition = "center";
                divChild[x].style.backgroundRepeat = "no-repeat";
                divChild[x].style.backgroundSize = "cover";
                divChild[x].style.height = 100 + "%";

                if(x === 0 || x === this.number + 1) {
                    divChild[x].style.width = (100 / this.number) + "%";
                }
                else {
                    divChild[x].style.width = (100 / this.number) + "%";
                    divChild[x].style.left = ((100 / this.number) * (x - 1)) + "%";
                }
            }

            divChild[0].style.left = (-(100 / this.number)) + "%";
            divChild[this.number + 1].style.left = "+100%";
        }
        else {
            for(let x = 0; x < this.number + 2; x++) {
                divChild[x].style.position = "absolute";
                divChild[x].style.backgroundPosition = "center";
                divChild[x].style.backgroundRepeat = "no-repeat";
                divChild[x].style.backgroundSize = "cover";
                divChild[x].style.width = 100 + "%";

                if(x === 0 || x === this.number + 1) {
                    divChild[x].style.height = (100 / this.number) + "%";
                }
                else {
                    divChild[x].style.height = (100 / this.number) + "%";
                    divChild[x].style.top = ((100 / this.number) * (x - 1)) + "%";
                }
            }

            divChild[0].style.top = (-(100 / this.number)) + "%";
            divChild[this.number + 1].style.top = "+100%";
        }

        for(let x = 0; x < 2; x++) {
            divButton[x].style.position = "absolute";
            divButton[x].style.width = "15%";
            divButton[x].style.height = "15%";
            divButton[x].style.backgroundColor = "black";
            divButton[x].style.zIndex = "1";
            divButton[x].style.opacity = "0.5";

        }

        if(direct === "left" || direct === "right") {
            divButton[0].style.left = "2%";
            divButton[0].style.clipPath = "polygon(100% 100%, 100% 0, 0 50%)";
            divButton[0].style.top = "42.5%";
            divButton[1].style.right = "0";
            divButton[1].style.clipPath = "polygon(0 0, 0 100%, 100% 50%)";
            divButton[1].style.top = "42.5%";
        }
        else {
            divButton[0].style.up = "2%";
            divButton[0].style.clipPath = "polygon(50% 0, 0 100%, 100% 100%)";
            divButton[0].style.left = "42.5%";
            divButton[1].style.bottom = "0";
            divButton[1].style.clipPath = "polygon(100% 0, 0 0, 50% 100%)";
            divButton[1].style.left = "42.5%";
        }



        let y = 0
        for(let x = 0; x < this.number + 2; x++) {
            if(y === (array.length)) {
                y = 0;
                divChild[x].style.backgroundImage = "url('" + this.array[y] + "')";
                y++;
            }
            else {
                divChild[x].style.backgroundImage = "url('" + this.array[y] + "')";
                y++;
            }
        }
        if(button === false) {
            divButton[0].style.display = "none";
            divButton[1].style.display = "none";
        }
    }

    this.start = function () {
        carousel();

        let images = document.getElementsByClassName("" + name + "");

        /**
         * Begin carrousel
         */
        function carousel() {
            let time = setTimeout(function () {
                if(direct === "left" || direct === "up") {
                    direction("-100%", "left", 2);
                }
                else {
                    direction("+100%", "right", 0);
                }
                removeListener(leftGo, rightGo);
            }, 3000);

            let nameButton = "button" + name;
            document.getElementsByClassName(nameButton)[0].addEventListener("click", leftGo);
            document.getElementsByClassName(nameButton)[1].addEventListener("click", rightGo);

            /**
             * Scroll left
             */
            function leftGo() {
                if(getComputedStyle(images[1])["transform"] === ("none")) {
                    clearTimeout(time);
                    direction("-100%", "left", 2);
                    removeListener(leftGo, rightGo);
                }
            }

            /**
             * Scroll right
             */
            function rightGo() {
                if(getComputedStyle(images[1])["transform"] === ("none")) {
                    clearTimeout(time);
                    direction("+100%", "right", 0);
                    removeListener(leftGo, rightGo);
                }
            }
        }

        /**
         * Remove listener of button left and right
         * @param leftGo
         * @param rightGo
         */
        function removeListener(leftGo, rightGo) {
            let nameButton = "button" + name;
            document.getElementsByClassName(nameButton)[0].removeEventListener("click", leftGo);
            document.getElementsByClassName(nameButton)[1].removeEventListener("click", rightGo);
        }

        /**
         * Function for animate the carrousel
         * @param direction
         * @param dir
         * @param number
         */
        function direction(direction, dir, number) {
            if(direct === "left" || direct === "right") {
                for(let x = 0; x < numberImage + 2; x++) {
                    images[x].animate([
                        { transform: 'translateX(' + direction + ')' }
                    ], {
                        duration: 250,
                    });
                }
            }
            else {
                for(let x = 0; x < numberImage + 2; x++) {
                    images[x].animate([
                        { transform: 'translateY(' + direction + ')' }
                    ], {
                        duration: 250,
                    });
                }
            }

            setTimeout(function () {
                backgroundParent(number);
                switchImage(dir);
                carousel();
            }, 250);
        }

        /**
         * Function for switch images of divs
         * @param dir
         */
        function switchImage(dir) {
            for(let image of images) {
                for(let item of array) {
                    if(image.style.backgroundImage ===  'url("' + item + '")') {
                        let index = array.indexOf(item);
                        if(dir === "left") {
                            if(index < (array.length - 1)) {
                                image.style.backgroundImage = "url('" + array[index + 1] + "')";
                            }
                            else {
                                image.style.backgroundImage = "url('" + array[0] + "')";
                            }
                        }
                        else if(dir === "right"){
                            if(index > 0) {
                                image.style.backgroundImage = "url('" + array[index - 1] + "')";
                            }
                            else {
                                image.style.backgroundImage = "url('" + array[array.length - 1] + "')";
                            }
                        }

                        break;
                    }
                }
            }
        }

        /**
         * Function for debug image switch
         */
        function backgroundParent() {
            for(let image of images) {
                image.style.display = "none";
            }

            setTimeout(function() {
                for(let image of images) {
                    image.style.display = "initial";
                }
            }, 200);
        }
    }
}

let array1 = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

let carrousel1 = new Carrousel(array1, "new", document.body,"20%", "800px", 1, false, "left");
carrousel1.createCarrousel();
carrousel1.start();

document.getElementById("new").style.borderRadius = "10%";
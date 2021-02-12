let image1 = "image1.jpg";
let image2 = "image2.jpg";
let image3 = "image3.jpg";
let image4 = "image4.jpg";
let array = [image1, image2, image3, image4];
let images = document.getElementsByClassName("image");
let imagesUp = document.getElementsByClassName("imageUp");
let divs = document.getElementsByClassName("imageHidden");
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");

let x = 0;

for(let image of images) {
    image.style.backgroundImage = "url('" + array[x] + "')";
    x++;
}

x = 0;

for(let image of imagesUp) {
    if(x >= (array.length -1)) {
        image.style.backgroundImage = "url('" + array[0] + "')";
        x = 0;
    }
    else {
        image.style.backgroundImage = "url('" + array[x + 1] + "')";
        x++;
    }
}

divs[0].style.top = "0%";
divs[1].style.top = "+33.333%";
divs[2].style.top = "+66.666%";

carousel();

/**
 * Begin carrousel
 */
function carousel() {
    let time = setTimeout(function () {
        direction("-100%", "left", 2);
        removeListener(leftGo, rightGo);
    }, 3000);

    buttonLeft.addEventListener("click", leftGo);
    buttonRight.addEventListener("click", rightGo);

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
    buttonLeft.removeEventListener("click", leftGo);
    buttonRight.removeEventListener("click", rightGo);
}

/**
 * Function for animate the carrousel
 * @param direction
 * @param dir
 * @param number
 */
function direction(direction, dir, number) {
    images[1].animate([
        { transform: 'translateX(' + direction + ')' }
    ], {
        duration: 500,
    });

    images[number].animate([
        { transform: 'translateX(' + direction + ')' }
    ], {
        duration: 500,
    });

    imagesUp[0].animate([
        { transform: 'translateY(' + direction + ')' }
    ], {
        duration: 500,
    });

    imagesUp[1].animate([
        { transform: 'translateY(' + direction + ')' }
    ], {
        duration: 500,
    });

    imagesUp[2].animate([
        { transform: 'translateY(' + direction + ')' }
    ], {
        duration: 500,
    });

    imagesUp[3].animate([
        { transform: 'translateY(' + direction + ')' }
    ], {
        duration: 500,
    });

    imagesUp[4].animate([
        { transform: 'translateY(' + direction + ')' }
    ], {
        duration: 500,
    });

    setTimeout(function () {
        backgroundParent(number);
        switchImage(dir);
        carousel();
    }, 500);
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

    for(let image of imagesUp) {
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
 * @param image
 */
function backgroundParent(image) {
    document.getElementById("carrousel").style.backgroundImage = images[image].style.backgroundImage;

    for(let image of images) {
        image.style.display = "none";
    }

    for(let image of imagesUp) {
        image.style.display = "none";
    }

    let y;

    if(image === 2) {
        y = 2;
        for(let div of divs) {
            div.style.backgroundImage = imagesUp[y].style.backgroundImage;
            div.style.display = "initial";
            y++;
            console.log(y);
        }
    }
    else {
        y = 0;
        for(let div of divs) {
            div.style.backgroundImage = imagesUp[y].style.backgroundImage;
            div.style.display = "initial";
            y++;
        }
    }

    setTimeout(function() {
        document.getElementById("carrousel").style.backgroundImage = "none";
        for(let div of divs) {
            div.style.display = "none";
        }

        for(let image of images) {
            image.style.display = "initial";
        }

        for(let image of imagesUp) {
            image.style.display = "initial";
        }
    }, 150);
}
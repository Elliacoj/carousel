
let image1 = "image1.jpg";
let image2 = "image2.jpg";
let image3 = "image3.jpg";
let image4 = "image4.jpg";
let array = [image1, image2, image3, image4];
let images = document.getElementsByClassName("image");
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");

let x = 0;

for(let image of images) {
    image.style.backgroundImage = "url('" + array[x] + "')";
    x++;
}

function carousel() {
    let time = setTimeout(function () {
        left();
        removeListener(leftGo, rightGo);
    }, 3000)

    buttonLeft.addEventListener("click", leftGo);

    buttonRight.addEventListener("click", rightGo);

    function leftGo() {
        if(getComputedStyle(images[1])["transform"] === ("none")) {
            clearTimeout(time);
            right();
            removeListener(leftGo, rightGo);
        }
    }

    function rightGo() {
        if(getComputedStyle(images[1])["transform"] === ("none")) {
            clearTimeout(time);
            left();
            removeListener(leftGo, rightGo);
        }
    }
}

function removeListener(leftGo, rightGo) {
    buttonLeft.removeEventListener("click", leftGo);
    buttonRight.removeEventListener("click", rightGo);
}

function left() {
    images[0].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 500,
    });

    images[1].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 500,
    });

    images[2].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 500,
    });

    setTimeout(function () {
        switchImageLeft();
        carousel();
    }, 500);
}

function right() {
    images[0].animate([
        { transform: 'translateX(+100%)' }
    ], {
        duration: 500,
    });

    images[1].animate([
        { transform: 'translateX(+100%)' }
    ], {
        duration: 500,
    });

    images[2].animate([
        { transform: 'translateX(+100%)' }
    ], {
        duration: 500,
    });

    setTimeout(function () {
        switchImageRight();
        carousel();
    }, 500);

}

carousel();

function switchImageLeft() {
    for(let image of images) {
        for(let item of array) {
            if(image.style.backgroundImage ===  'url("' + item + '")') {
                let index = array.indexOf(item);
                if(index < (array.length - 1)) {
                    image.style.backgroundImage = "url('" + array[index + 1] + "')";
                }
                else {
                    image.style.backgroundImage = "url('" + array[0] + "')";
                }
                break;
            }
        }
    }
}

function switchImageRight() {
    for(let image of images) {
        for(let item of array) {
            if(image.style.backgroundImage ===  'url("' + item + '")') {
                let index = array.indexOf(item);
                if(index > 0) {
                    image.style.backgroundImage = "url('" + array[index - 1] + "')";
                }
                else {
                    image.style.backgroundImage = "url('" + array[array.length - 1] + "')";
                }
                break;
            }
        }
    }
}
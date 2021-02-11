
let image1 = "image1.jpg";
let image2 = "image2.jpg";
let image3 = "image3.jpg";
let image4 = "image4.jpg";
let array = [image1, image2, image3, image4];
let images = document.getElementsByClassName("image");
let buttonLeft = document.getElementById("buttonLeft");
let buttonright = document.getElementById("buttonRight");

let x = 0;

for(let image of images) {
    image.style.backgroundImage = "url('" + array[x] + "')";
    x++;
}

function carousel() {
    let time = setTimeout(function () {
        left();
    }, 3000)

    buttonLeft.addEventListener("click", function () {
        clearTimeout(time);
        setTimeout(function () {
            left();
        }, 50)

    });
}

function left() {
    images[0].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 1000,
    });

    images[1].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 1000,
    });

    images[2].animate([
        { transform: 'translateX(-100%)' }
    ], {
        duration: 1000,
    });

    let timeLeft = setTimeout(function () {
        switchImageLeft();
        carousel();
    }, 1008);

    buttonLeft.addEventListener("click", function () {
        clearTimeout(timeLeft);
    });
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

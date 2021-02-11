
let image1 = "image1.jpg";
let image2 = "image2.jpg";
let image3 = "image3.jpg";
let image4 = "image4.jpg";
let array = [image1, image2, image3, image4];
let images = document.getElementsByClassName("image");

let x = 0;

for(let image of images) {
    image.style.backgroundImage = "url('" + array[x] + "')";
    x++;
}

function carousel() {
    let time = setTimeout(function () {
        left();
        carousel()
    }, 3000)
}

function left() {
    images[0].animate([
        // keyframes
        { transform: 'translateX(-100%)' }
    ], {
        // timing options
        duration: 1000,
    });

    images[1].animate([
        // keyframes
        { transform: 'translateX(-100%)' }
    ], {
        // timing options
        duration: 1000,
    });

    images[2].animate([
        // keyframes
        { transform: 'translateX(-100%)' }
    ], {
        // timing options
        duration: 1000,
    });

    setTimeout(function () {
        switchImageLeft();
    }, 1008)
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


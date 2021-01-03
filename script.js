let div = document.createElement("img");
let image1 = "image1.jpg";
let image2 = "image2.jpg";
let image3 = "image3.jpg";
let image4 = "image4.jpg";
let array = [image1, image2, image3, image4];

document.body.append(div);
div.className = "image";
let x = 0;

function carousel() {
    let time = setTimeout(function () {
        div.src = array[x];
        x++
        if(x === array.length) {
            x = 0;
        }
        carousel()
    }, 3000)
}

carousel()

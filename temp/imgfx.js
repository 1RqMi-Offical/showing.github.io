var images = new Array(
    'https://i.ibb.co/pwtQDrL/car2.jpg',
    'https://i.ibb.co/3sVSCDc/car3.jpg',
    'https://i.ibb.co/hVQhZsQ/car1.jpg',
    'https://i.ibb.co/JpP7QTR/car5.jpg'
);

var slices = 64;
var interval = 3500;
var numImages = images.length;
var imageIndex = 0;
var count = 0;
var timer = null;
document.addEventListener('DOMContentLoaded', function () {
    let containerOne = document.querySelector('.image.one');
    let containerTwo = document.querySelector('.image.two');


    for (var i = 0; i < slices; i++) {
        var div = document.createElement('div');
        containerOne.append(div);
        var div = document.createElement('div');
        containerTwo.append(div);
    }


    function switchImages() {
        var newContainer = document.querySelectorAll('.image')[(count % 2)];
        var oldContainer = document.querySelectorAll('.image')[((count + 1) % 2)];
        if (imageIndex >= numImages) imageIndex = 0;
        var im = new Image();
        im.addEventListener('load', function () {
            var nodes = newContainer.childNodes;
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].style.backgroundImage = 'url(' + images[imageIndex] + ')';
            }
            newContainer.classList.add('animate-in');
            newContainer.classList.remove('animate-out');
            oldContainer.classList.add('animate-out');
            oldContainer.classList.remove('animate-in');
            newContainer.style.opacity = 1;
            oldContainer.style.opacity = 0;
            count++;
            imageIndex++;
            timer = setTimeout(switchImages, interval);
        });
        im.src = images[imageIndex];
    }
    switchImages();

});
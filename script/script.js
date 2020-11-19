var i = 0; //Start Point
var images = [];
var time = 3000;

// Image List
images[0] = 'img/pexels-adrian-dorobantu-2127733.jpg';
images[1] = 'img/pexels-jae-park-3802510.jpg';
images[2] = 'img/pexels-pixabay-326259.jpg';
images[3] = 'img/pexels-yurii-hlei-1545743.jpg';

// Change Img
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
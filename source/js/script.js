/*
برنامه حرکت اسلاید
const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let image=$.querySelector('.img-slider')
let sliderItem = $.querySelectorAll(".slider-item");
let imageSrc=[
    "./image/1.jpg",
    "./image/2.png",
    "./image/3.jpg",

]
console.log(imageSrc)
// image.src=imageSrc[1]
// console.log(image.src=`${imageSrc[1]}`)

let index = 0;

function prevItem(){
    
    index--;
    if(index<0){
        index=2;
    }
    image.src=imageSrc[index]
    console.log(image)
}

function nextItem(){
    if(index>=3){
        index=0
    
    }else{
        image.src=imageSrc[index]
        index++;
    }

}

// console.log(sliderItem);

setInterval(nextItem , 1000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);



*/




function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}
// Slide
var newImageSlide = [
    "https://www.hay8811.com/server/upload/images/20230613/468bdd6bc16a3c3608c1e30f5b6d3863.jpg?v=20240419",
    "https://www.hay8811.com/server/upload/images/20240312/be089a6ede09ec0be30aa7fe8b5735b6.jpg?v=20240419",
    "https://www.hay8811.com/server/upload/images/20230602/af9c30048bffc09cd9486711b449d2d2.jpg?v=20240419",
];

var slide = document.querySelectorAll(".main_slide img");
slide.forEach(function(img, index) {
    img.src = newImageSlide[index];
});

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    center: true,
    items: 1,
    margin: 10,
})

// Change Pic
var newImageSources = [
    "./img/Thumnail1.png",
    "./img/Thumnail2.png",
    "./img/Thumnail3.png",
    "./img/Thumnail4.png",
    "./img/Thumnail5.png",
    "./img/Thumnail6.png",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});
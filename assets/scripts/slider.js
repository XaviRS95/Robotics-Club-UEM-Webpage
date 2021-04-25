var slideIndex = 1;
showSlides(slideIndex,'iotimage');
showSlides(slideIndex,'roboticsimage');


function plusSlides(n,classname) {
    showSlides(slideIndex += n, classname);
}

function currentSlide(n,classname) {
    showSlides(slideIndex = n, classname);
}

function showSlides(n, classname) {
    var i;
    var slides = document.getElementsByClassName(classname);
    console.log("Button of", classname,"pressed")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

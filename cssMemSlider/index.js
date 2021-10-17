let slideNumber = 1;
show(slideNumber);

function currentSlide(n) {
    show(slideNumber = n);
}

function show(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
        slideNumber = 1;
    }
    if (n < 1) {
        slideNumber = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNumber - 1].style.display = "block";
    dots[slideNumber - 1].className += " active";
}

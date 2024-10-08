var i = 0;
var images = [];
images[1] = "cafe.jpg";
images[0] = "harr.JPG";
images[2] = "ships.JPG";
images[3] = "view.jpg";
images[4] = "Naval-Aviation-Museum-goa5-1.jpg";
images[5] = "cafeout.jpg";
images[6] = "plane.JPG";

function loadImg() {
    document.slide.src = images[0];
}

function goNext() {
    if (i < images.length - 1) {
        i++;
        document.slide.src = images[i];
    } else {
        i = 0;
        document.slide.src = images[i];
    }
}

function goPrev() {
    if (i > 0) {
        i--;
        document.slide.src = images[i];
    } else {
        i = images.length - 1;
        document.slide.src = images[i];
    }
}

function scrollto() {
    window.scrollTo({
        top: 750,
        behavior: 'smooth'
    });
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', () => {
    const h2 = document.querySelector('.asiafirst');
    if (window.scrollY > 100) {
        h2.classList.add('scrolled');
    } else {
        h2.classList.remove('scrolled');
    }
});

window.onload = loadImg;

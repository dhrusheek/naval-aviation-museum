function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  const heading = document.getElementById("heading");

  const images = [
    "2b739bab4d0a6f6eee1434c6e4e6942e.jpg",
    "3-rama-1.jpg",
    "1000_F_549374195_orUmIHvHNmgdt3gqeWbfVlYx0UjFjtOW.jpg"
  ];

  const captions = [
    "This is information about Image 1.",
    "This is information about Image 2.",
    "This is information about Image 3."
  ];

  const headings = [
    "Heading 1",
    "Heading 2",
    "Heading 3"
  ];

  lightbox.style.display = "flex";
  lightboxImg.src = images[index];
  caption.innerHTML = captions[index];
  heading.innerHTML = headings[index];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

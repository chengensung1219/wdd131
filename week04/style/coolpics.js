const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 700) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide")
    }
}

const img = document.querySelector(".gallery-img") 

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img class="big-img" src="${pic}" alt="${alt}"></div>`;
}

function viewHandler(event) {
    // Get the clicked image element
    const clickedImage = event.target;
  
    // Get the src attribute of the clicked image and split it on the "-"
    const imageSrc = clickedImage.src;
    const imageParts = imageSrc.split('-');
  
    // Construct the new image file name by adding "-full.jpeg" to the first part of the array
    const fullImageSrc = `${imageParts[0]}-full.jpeg`;
  
    // Get the alt text of the clicked image
    const imageAlt = clickedImage.alt;
  
    // Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML('beforebegin', viewerTemplate(fullImageSrc, imageAlt));
  
    // Add a listener to the close button (X) that calls the closeViewer function when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}
  
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

const gallerySection = document.querySelector('.gallery');

gallerySection.addEventListener('click', viewHandler);

menuButton.addEventListener("click", toggleMenu);
handleResize();
window.addEventListener("resize", handleResize);
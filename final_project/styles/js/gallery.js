
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img class="big-img" src="${pic}" alt="${alt}"></div>`;
}

function viewHandler(event) {

    const clickedImage = event.target;

    const imageSrc = clickedImage.src;
    const imageParts = imageSrc.split('-');  

    const fullImageSrc = `${imageParts[0]}-full.jpg`;
  
    const imageAlt = clickedImage.alt;
  
    document.body.insertAdjacentHTML('beforebegin', viewerTemplate(fullImageSrc, imageAlt));
  
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}
  
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

const gallerySection = document.querySelector('.row');


gallerySection.addEventListener('click', viewHandler);
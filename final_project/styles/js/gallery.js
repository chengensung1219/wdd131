import photos from './photos.mjs';

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

function photoTemplate(photo) {
    return `
        <figure>
            <img class="${photo.photoTypes}" src="${photo.image}" alt="${photo.name}">
        </figure>`
}

const searchForm = document.querySelector('.searchbar');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', searchHandler);

function searchHandler(event) {
    event.preventDefault();

    const query = searchInput.value.toLowerCase();

    const filteredPhotos = filterPhotos(query);

    renderPhotos(filteredPhotos);
}

function filterPhotos(query) {

    return photos.filter(photo => {

        const isInEvents = photo.events.some(event => event.toLowerCase().includes(query));
        const isInSubjects = photo.subjects.some(subject => subject.toLowerCase().includes(query));
        const isInBackgrounds = photo.backgrounds.some(background => background.toLowerCase().includes(query));
        const isInTypes = photo.types.some(type => type.toLowerCase().includes(query));


        return isInEvents || isInSubjects || isInBackgrounds || isInTypes;
    }).sort((a, b) => {

        return a.name.localeCompare(b.name);
    });
}
function renderPhotos(photoList) {
    const outputElement1 = document.getElementById('column1');
    const outputElement2 = document.getElementById('column2');
    const outputElement3 = document.getElementById('column3');
    const outputElement4 = document.getElementById('column4');

    outputElement1.innerHTML = '';
    outputElement2.innerHTML = '';
    outputElement3.innerHTML = '';
    outputElement4.innerHTML = '';

    const columns = photoList.map(photo => photo.column);
    for (let i = 0; i < columns.length; i++) {
        const photoHTML = photoTemplate(photoList[i]);
        
        if (columns[i] === 'column1') {
            outputElement1.innerHTML += photoHTML;
        } else if (columns[i] === 'column2') {
            outputElement2.innerHTML += photoHTML;
        } else if (columns[i] === 'column3') {
            outputElement3.innerHTML += photoHTML;
        } else {
            outputElement4.innerHTML += photoHTML;
        }
    }
}

function init() {

    renderPhotos(photos);
}
  
init();
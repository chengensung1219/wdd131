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
            <img class="${photo.photoTypes}" src="${photo.image}" loading="lazy" alt="${photo.name}">
        </figure>`
}

const searchForm = document.querySelector('.searchbar');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', searchHandler);

function searchHandler(event) {
    event.preventDefault();

    // Get the search input value and convert to lowercase
    const query = searchInput.value.toLowerCase();

    // Filter recipes based on the query
    const filteredPhotos = filterPhotos(query);

    // Render the filtered recipes
    renderPhotos(filteredPhotos);
}

function filterPhotos(query) {
    // Use Array.filter() to filter recipes based on the query
    return photos.filter(photo => {
        // Check if query is found in recipe name, description, tags, or ingredients
        const isInEvents = photo.events.some(event => event.toLowerCase().includes(query));
        const isInSubjects = photo.subjects.some(subject => subject.toLowerCase().includes(query));
        const isInBackgrounds = photo.backgrounds.some(background => background.toLowerCase().includes(query));
        const isInTypes = photo.types.some(type => type.toLowerCase().includes(query));

        // Return recipes that match any of the criteria
        return isInEvents || isInSubjects || isInBackgrounds || isInTypes;
    }).sort((a, b) => {
        // Sort alphabetically by recipe name
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
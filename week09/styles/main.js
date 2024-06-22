import { participantTemplate, successTemplate } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const articleMainContent = document.querySelector('#maincontent');

    buildAndOutputArticles(articles, articleMainContent);
});

function buildAndOutputArticles(articles, articleMainContent) {
    
    articles.forEach(article => {
        const articleDetailsElement = document.createElement('section');
        articleDetailsElement.classList.add("article-details")

        const articleContentElement = document.createElement('section');
        articleContentElement.classList.add("article-content")
        
        const articleDetailsHTML = `
            <p class="date">${article.date}</p>
            <p>${article.ages}</p>
            <p>${article.genre}</p>
            <p>${article.stars}</p>
        `;

        const articleContentHTML = `
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description} <a href="">Read More...</a></p>
        `;
        
        articleDetailsElement.innerHTML = articleDetailsHTML;
        articleMainContent.appendChild(articleDetailsElement);

        articleContentElement.innerHTML = articleContentHTML;
        articleMainContent.appendChild(articleContentElement);
    });
}
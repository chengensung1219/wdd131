import recipes from './recipes.mjs';

function random(nummber) {
	return Math.floor(Math.random() * nummber);
}

function getRandomListItem(list) {
    const countList = list.length;
    const randomNumber = random(countList);
    return list[randomNumber];
}
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	return tags.map(tag => `<p>${tag}</p>`).join('');
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
	>`;
	// our ratings are always out of 5, so create a for loop from 1 to 5
	for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than or equal to our rating
		if (i <= rating) {
			// if so then output a filled star
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			// else output an empty star
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
}

function recipeTemplate(recipe) {
    return `
        <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">
        <div class="details">
            <div class="recipe_tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <h2>${recipe.name}</h2>
            <p class="recipe_ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="description">${recipe.description}</p>
        </div>`
}

const searchForm = document.querySelector('.searchbar');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', searchHandler);

function searchHandler(event) {
    event.preventDefault();

    // Get the search input value and convert to lowercase
    const query = searchInput.value.toLowerCase();

    // Filter recipes based on the query
    const filteredRecipes = filterRecipes(query);

    // Render the filtered recipes
    renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
    // Use Array.filter() to filter recipes based on the query
    return recipes.filter(recipe => {
        // Check if query is found in recipe name, description, tags, or ingredients
        const isInName = recipe.name.toLowerCase().includes(query);
        const isInDescription = recipe.description.toLowerCase().includes(query);
        const isInTags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        const isInIngredients = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));

        // Return recipes that match any of the criteria
        return isInName || isInDescription || isInTags || isInIngredients;
    }).sort((a, b) => {
        // Sort alphabetically by recipe name
        return a.name.localeCompare(b.name);
    });
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const outputElement = document.getElementById('recipe');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	// Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = recipeHTML;

}

function init() {
  // get a random recipe
  const recipe = getRandomListItem(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

init();
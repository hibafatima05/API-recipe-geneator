
function searchRecipes() {
    const ingredientsInput = document.getElementById('ingredientsInput').value;
    const apiKey = 'df5fcd041f064e1ca579ad6c4dc4c9c5'; 
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsInput}&apiKey=${apiKey}&number=10`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           const recipesContainer = document.getElementById('recipesContainer');
            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                 const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');
                recipeElement.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <p>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                    <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}



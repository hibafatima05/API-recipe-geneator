// let ingredientsInput = '';
let recipesContainer = '';
let recipeElement = '';

let apiKey = 'df5fcd041f064e1ca579ad6c4dc4c9c5';
let apiUrl1 = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=breakfast&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';
let apiUrl2 = ' https://api.spoonacular.com/recipes/findByIngredients?ingredients=lunch&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';
let apiUrl3 = ' https://api.spoonacular.com/recipes/findByIngredients?ingredients=dinner&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';
let apiUrl4 = ' https://api.spoonacular.com/recipes/findByIngredients?ingredients=dessert&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';


function searchRecipes() {
let apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsInput}&apiKey=${apiKey}&number=10`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let recipesContainer = document.getElementById('recipesContainer');
 let ingredientsInput = document.getElementById('ingredientsInput').value;

            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                let recipeElement = document.createElement('div');
                recipeElement.classList.add('search');
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


function breakFastRecipes() {


    fetch(apiUrl1)
        .then(response => response.json())
        .then(data => {
            recipesContainer = document.getElementById('recipesContainer');
            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                recipeElement = document.createElement('div');
                recipeElement.classList.add('breakfast');
                recipeElement.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <p><strong>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</strong></p>
                    <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function lunchRecipes() {

    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            recipesContainer = document.getElementById('recipesContainer');
            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                recipeElement = document.createElement('div');
                recipeElement.classList.add('lunch');
                recipeElement.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <p><strong>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</strong></p>
                    <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}
function dinnerRecipes() {

    fetch(apiUrl3)
        .then(response => response.json())
        .then(data => {
            recipesContainer = document.getElementById('recipesContainer');
            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                recipeElement = document.createElement('div');
                recipeElement.classList.add('dinner');
                recipeElement.innerHTML = `
                   <h2>${recipe.title}</h2>
                   <img src="${recipe.image}" width="100px "height="100px" alt="${recipe.title}">
                   <p><strong>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</strong></p>
                   <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
               `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}
function dessertRecipes() {

    fetch(apiUrl4)
        .then(response => response.json())
        .then(data => {
            let recipesContainer = document.getElementById('recipesContainer');
            recipesContainer.innerHTML = '';
            console.log(data);

            data.forEach(recipe => {
                let recipeElement = document.createElement('div');
                recipeElement.classList.add('dessert');
                recipeElement.innerHTML = `
                     <h2>${recipe.title}</h2>
                     <img src="${recipe.image}" alt="${recipe.title}">
                     <p> <strong>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</strong></p>
                     <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                 `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

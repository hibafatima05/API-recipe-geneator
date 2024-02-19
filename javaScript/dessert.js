const apiUrl4 = ' https://api.spoonacular.com/recipes/findByIngredients?ingredients=dessert&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';

function dessertRecipes() {
  
     fetch(apiUrl4)
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
                      <p> <strong>${recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</strong></p>
                      <p>${recipe.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                  `;
                  recipesContainer.appendChild(recipeElement);
              });
          })
          .catch(error => console.error('Error fetching recipes:', error));
  }
  
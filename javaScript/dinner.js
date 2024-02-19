
const apiKey = 'df5fcd041f064e1ca579ad6c4dc4c9c5'; 
const apiUrl3= ' https://api.spoonacular.com/recipes/findByIngredients?ingredients=dinner&apiKey=df5fcd041f064e1ca579ad6c4dc4c9c5&number=4';

// const btn =  getElementByTag('button');
// btn.addEventListener('click',()=>{ this.style.display='none'});
// function dinnerRecipes() {
  

// document.getElementById('myButton').addEventListener('click', function() {
//     this.style.display = 'none';
// });

   fetch(apiUrl3)
       .then(response => response.json())
       .then(data => {
           recipesContainer = document.getElementById('recipesContainer');
           recipesContainer.innerHTML = '';
           console.log(data);

           data.forEach(recipe => {
                recipeElement = document.createElement('div');
               recipeElement.classList.add('recipe');
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

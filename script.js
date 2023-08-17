const samplerecipes=[
    {title:'pasta carbonara', description:'classic italian pasta with egg ,cheese, and bacon.'},

    {title:'chicken curry', description:'spicy chicken curry  with aromatic  spices .'},

    {title:'chocolate brownies', description:'decadent  chocolate brownies  with a fudgy texture .'},
];

function displayrecipes(){
    const recipelist=document.getElementById('recipelist');

    samplerecipes.forEach( recipe => {
        const listItem=document.createElement('li');
        listItem.innerHTML =(` <strong> ${recipe.title} </strong>  : ${recipe.description}`);
        recipelist.appendChild(listItem);

    });

    
}

displayrecipes();

function searchRecipes(){
 
    const searchInput=document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes=samplerecipes.filter(recipe =>{
      return recipe.title.toLowerCase().includes(searchInput);

    });

    const  recipeList =document.getElementById('recipelist');
    recipeList.innerHTML='';


     filteredRecipes.forEach( recipe => {
        const listItem =document.createElement('li');
        listItem.innerHTML =(` <strong> ${recipe.title}</strong> : ${recipe.description}`);
        recipeList.appendChild(listItem);
     });
    }

    function addRecipe(event){
        event.preventDefault();
        const recipeTitle=document.getElementById('recipeTitle').value;
        const recipeDescription=document.getElementById('recipeDescription').value;

        if(!recipeTitle ||!recipeDescription){
            alert('please fill in both title and description');
            return;
        }

        const newRecipe={title:recipeTitle,description:recipeDescription};
        samplerecipes.push(newRecipe);

        displayrecipes();
        document.getElementById('addRecipeForm').reset();
    }

    document.getElementById('addRecipeForm').addEventListener('submit', addRecipe);

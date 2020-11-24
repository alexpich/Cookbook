class Recipe {
  constructor(recipeId, recipeName, recipeDescription, recipeImageUrl, categories) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.recipeDescription = recipeDescription;
    this.recipeImageUrl = recipeImageUrl;
    this.categories = categories;
  }
}

export default Recipe;

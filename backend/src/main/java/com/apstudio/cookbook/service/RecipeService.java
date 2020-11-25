package com.apstudio.cookbook.service;

import com.apstudio.cookbook.model.Category;
import com.apstudio.cookbook.model.Recipe;
import com.apstudio.cookbook.repository.CategoryRepository;
import com.apstudio.cookbook.repository.RecipeRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

	@Autowired
	private RecipeRepository recipeRepo;

	@Autowired
	private CategoryRepository catRepo;

	@Autowired
	private CategoryService catService;

	// POST ONE
	public Recipe saveRecipe(Recipe recipe) {
		Recipe newRecipe = new Recipe();
		newRecipe.setRecipeName(recipe.getRecipeName());
		newRecipe.setRecipeImageUrl(recipe.getRecipeImageUrl());
		newRecipe.setRecipeDescription(recipe.getRecipeDescription());

		// Gets all categories and adds them to the new recipe
		newRecipe.getCategories().addAll(recipe.getCategories().stream().map(c -> {
			Category cc = catService.getCategoryById(c.getCategoryId());
			cc.getRecipes().add(newRecipe);
			return cc;
		}).collect(Collectors.toList()));

		return recipeRepo.save(newRecipe);
	}

	// GET ONE BY ID
	public Recipe getRecipeById(Long recipeId) {
		return recipeRepo.findByRecipeId(recipeId);
	}

	// GET ALL
	public List<Recipe> getAllRecipes() {
		List<Recipe> recipes = recipeRepo.findAll();

		if (recipes.size() > 0) {
			return recipes;
		} else {
			return new ArrayList<Recipe>();
		}
	}

}

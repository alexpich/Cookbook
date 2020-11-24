package com.apstudio.cookbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apstudio.cookbook.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
	Recipe findByRecipeId(Long recipeId);
}

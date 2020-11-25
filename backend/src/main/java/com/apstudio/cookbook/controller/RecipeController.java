package com.apstudio.cookbook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.apstudio.cookbook.model.Recipe;
import com.apstudio.cookbook.service.RecipeService;

@RestController
@CrossOrigin
public class RecipeController {

	@Autowired
	private RecipeService recipeService;

	@PostMapping(path = "/recipe")
	public ResponseEntity<?> saveCustomer(@RequestBody Recipe recipe) {
		return new ResponseEntity<>(recipeService.saveRecipe(recipe), HttpStatus.CREATED);
	}

	@GetMapping("/recipe")
	public ResponseEntity<?> getAllRecipes() {
		return new ResponseEntity<>(recipeService.getAllRecipes(), HttpStatus.OK);
	}

	@GetMapping("/recipe/{recipeId}")
	public ResponseEntity<?> getRecipeById(@PathVariable Long recipeId) {
		return new ResponseEntity<>(recipeService.getRecipeById(recipeId), HttpStatus.OK);
	}
	
}

package com.apstudio.cookbook.model;

import javax.persistence.*;

import com.sun.istack.NotNull;

import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long recipeId;

	@NotNull
	private String recipeName;

	@NotNull
	private String recipeDescription;

	@NotNull
	private String recipeImageUrl;

	@ManyToMany(mappedBy = "recipes")
	private Collection<Category> categories = new ArrayList<>();

	public Recipe() {
	}

	public Recipe(Long recipeId, String recipeName, String recipeDescription, String recipeImageUrl,
			Collection<Category> categories) {
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
		this.recipeDescription = recipeDescription;
		this.recipeImageUrl = recipeImageUrl;
		this.categories = categories;
	}

	public Long getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(Long recipeId) {
		this.recipeId = recipeId;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public String getRecipeDescription() {
		return recipeDescription;
	}

	public void setRecipeDescription(String recipeDescription) {
		this.recipeDescription = recipeDescription;
	}

	public String getRecipeImageUrl() {
		return recipeImageUrl;
	}

	public void setRecipeImageUrl(String recipeImageUrl) {
		this.recipeImageUrl = recipeImageUrl;
	}

	public Collection<Category> getCategories() {
		return categories;
	}

	public void setCategories(Collection<Category> categories) {
		this.categories = categories;
	}
}

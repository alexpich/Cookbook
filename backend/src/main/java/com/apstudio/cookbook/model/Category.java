package com.apstudio.cookbook.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long categoryId;

	@NotNull
	private String categoryName;
	
	@NotNull
	private String categoryImageUrl;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "recipe_category", joinColumns = @JoinColumn(name = "category_id"), inverseJoinColumns = @JoinColumn(name = "recipe_id"))
	@JsonIgnore
	private Collection<Recipe> recipes = new ArrayList<>();

	public Category() {
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	public String getCategoryImageUrl() {
		return categoryImageUrl;
	}

	public void setCategoryImageUrl(String categoryImageUrl) {
		this.categoryImageUrl = categoryImageUrl;
	}

	public Collection<Recipe> getRecipes() {
		return recipes;
	}

	public void setCustomers(Collection<Recipe> recipes) {
		this.recipes = recipes;
	}
}

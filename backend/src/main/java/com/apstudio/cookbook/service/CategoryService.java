package com.apstudio.cookbook.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.apstudio.cookbook.model.Category;
import com.apstudio.cookbook.model.Recipe;
import com.apstudio.cookbook.repository.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository catRepo;

	// GET ONE BY ID
	public Category getCategoryById(Long categoryId) {
		return catRepo.findByCategoryId(categoryId);
	}

	// GET ALL
	public List<Category> getAllCategories() {
		List<Category> categories = catRepo.findAll();
		if (categories.size() > 0) {
			return categories;
		} else {
			return new ArrayList<Category>();
		}
	}

}

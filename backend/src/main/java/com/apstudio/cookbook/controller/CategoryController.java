package com.apstudio.cookbook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.apstudio.cookbook.service.CategoryService;

@RestController
@CrossOrigin
public class CategoryController {

	@Autowired
	private CategoryService catService;

	@GetMapping("/category")
	public ResponseEntity<?> getAllCategories() {
		return new ResponseEntity<>(catService.getAllCategories(), HttpStatus.OK);
	}

	@GetMapping("/category/{categoryId}")
	public ResponseEntity<?> getCategoryById(@PathVariable Long categoryId) {
		return new ResponseEntity<>(catService.getCategoryById(categoryId), HttpStatus.OK);
	}
}

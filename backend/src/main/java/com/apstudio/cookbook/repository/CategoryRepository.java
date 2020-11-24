package com.apstudio.cookbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apstudio.cookbook.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	Category findByCategoryId(Long categoryId);
}

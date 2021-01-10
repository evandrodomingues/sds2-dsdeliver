package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.devsuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepositoryImplementation<Product, Long> {

	List<Product> findAllByOrderByNameAsc();

}

package edu.utdallas.cs6314.dao.impl;

import java.util.List;

import edu.utdallas.cs6314.dao.ProductDAO;
import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.domain.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDAOImpl implements ProductDAO {
    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(String productId) {
        return productRepository.findOne(productId);
    }

    public List<Product> getAllProductsBySellerId(String sellerId) {
        return productRepository.findProductsBySellerId(sellerId);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
}

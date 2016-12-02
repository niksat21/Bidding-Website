package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Product;

public interface ProductService {

    List<Product> getAllProducts();

    Product getProduct(String productId);

    List<Product> getAllProductsBySellerId(String sellerId);

    Product addProduct(Product product);

    List<Product> searchForProducts(String searchText);
}

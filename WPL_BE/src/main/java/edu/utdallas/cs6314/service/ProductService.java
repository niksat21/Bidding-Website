package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Product;

import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
public interface ProductService {

    List<Product> getAllProducts();

    @Cacheable(value = "products", key = "#productId")
    Product getProduct(String productId);

    List<Product> getAllProductsBySellerId(String sellerId);

    @CachePut(value = "products", key = "#product.productId")
    Product addProduct(Product product);

    List<Product> searchForProducts(String searchText);
}

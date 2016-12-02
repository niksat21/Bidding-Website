package edu.utdallas.cs6314.dao.impl;

import java.util.*;
import java.util.stream.Collectors;

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

    public List<Product> searchForProducts(String searchText) {
        HashMap<Product, Integer> products = new HashMap<>();

        List<String> searchWords = Arrays.asList(searchText.split(" "));

        for (String searchWord : searchWords) {
            List<Product> results =
                    productRepository.findProductsByProductNameContainingIgnoreCase(searchWord);
            for (Product result : results) {

                if (!products.containsKey(result)) {
                    products.put(result, 0);
                }
                products.put(result, products.get(result) + 1);
            }
        }

        return products.entrySet().stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .map(Map.Entry::getKey).collect(Collectors.toList());
    }
}

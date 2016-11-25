package edu.utdallas.cs6314.service.Impl;

import java.util.List;

import edu.utdallas.cs6314.dao.ProductDAO;
import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDAO productDAO;

    public List<Product> getAllProducts() {
        return productDAO.getAllProducts();
    }

    public Product getProduct(String productId) {
        return productDAO.getProduct(productId);
    }

    public List<Product> getAllProductsBySellerId(String sellerId) {
        // TODO Check if seller exists.
        return productDAO.getAllProductsBySellerId(sellerId);
    }

    public Product addProduct(Product product) {
        return productDAO.addProduct(product);
    }
}

package edu.utdallas.cs6314.domain.repository;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.domain.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface ProductRepository extends MongoRepository<Product, String> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    //ProductId,Name,Category,Price,Specifications

    List<Product> findProductsByProductName(String productName);

    List<Product> findProductsByProductCategory(String productCategory);

    List<Product> findProductsByPrice(Long price);

    List<Product> findProductsBySpecifications(String specifications);

    List<Product> findProductsBySellerId(String sellerId);

    List<Product> findProductsByProductNameContainingIgnoreCase(String productName);
}

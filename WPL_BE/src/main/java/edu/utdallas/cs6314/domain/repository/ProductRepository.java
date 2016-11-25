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

    List<Product> findByProductId(Long productId);

    List<Product> findByProductName(String productName);

    List<Product> findByProductCategory(String productCategory);

    List<Product> findByPrice(Long price);

    List<Product> findBySpecifications(String specifications);



}

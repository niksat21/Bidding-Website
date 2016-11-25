package edu.utdallas.cs6314.domain.repository;

import java.util.List;

import edu.utdallas.cs6314.domain.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface ProductRepository extends MongoRepository<User, Long> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    //ProductId,Name,Category,Price,Specifications

    List<String> findByProductId(String ProductId);

    List<String> findByProductName(String ProductName);

    List<String> findByProductCategory(String ProductCategory);

    List<String> findByPrice(String Price);

    List<String> findBySpecificationsd(String Specifications);



}

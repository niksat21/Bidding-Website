package edu.utdallas.cs6314.domain.repository;

import edu.utdallas.cs6314.domain.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface OrderRepository extends MongoRepository<User, Long> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    // OrderId,ProductId,Price,Quantity

    List<String> findByProductId(String ProductId);
    List<String> findByOrderId(String OrderId);
    List<String> findByQuantity(String Quantity);
    List<String> findByPrice(String Price);




}
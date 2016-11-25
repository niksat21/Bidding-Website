package edu.utdallas.cs6314.domain.repository;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.domain.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface OrderRepository extends MongoRepository<Order, Long> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    // OrderId,ProductId,Price,Quantity

    //    List<String> findByProductId(String productId);

    List<String> findByOrderId(Long orderId);

    List<String> findByQuantity(int quantity);

    //    List<String> findByPrice(String Price);



}

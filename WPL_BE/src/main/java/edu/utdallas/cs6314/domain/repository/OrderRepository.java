package edu.utdallas.cs6314.domain.repository;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.domain.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface OrderRepository extends MongoRepository<Order, String> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    List<Order> findOrdersByBuyerId(String buyerId);

    List<Order> findOrdersBySellerId(String sellerId);

    Order findOrderByWinningBidId(String winningBidId);

    Order findOrderByProductId(String productId);
}

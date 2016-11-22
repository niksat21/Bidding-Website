package edu.utdallas.cs6314.domain.repository;

import edu.utdallas.cs6314.domain.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by niksat21 on 11/21/2016.
 */
public interface OrderSummayRepository extends MongoRepository<User, Long> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    // OrderId,UserName,TotalBill,ShipAddress,PaymentMethod,OrderDate,ShippedDate,OrderStatus


    List<String> findByUserName(String UserName);
    List<String> findByOrderId(String OrderId);
    List<String> findByTotalBill(String TotalBill);
    List<String> findByShipAddress(String ShipAddress);
    List<String> findByPaymentMethod(String PaymentMethod);
    List<String> findByOrderDate(String OrderDate);
    List<String> findByShippedDate(String ShippedDate);
    List<String> findByOrderStatus(String OrderStatus);





}

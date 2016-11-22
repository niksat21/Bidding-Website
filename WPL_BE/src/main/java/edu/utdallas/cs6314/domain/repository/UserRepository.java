package edu.utdallas.cs6314.domain.repository;

import edu.utdallas.cs6314.domain.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, Long> {
    /*
     * Basic queries should work as is (delete, save, getOne by Id, etc.
     * For more complex queries, we'd add stuff here.
     */

    //FirstName,LastName,UserName,Password,EmailId,ContactNo,Dob,BillingAddress,ShippingAddress,LastLogin

    List<String> findByFirstname(String FirstName);
    List<String> findByLastname(String LastName);
    List<String> findByUsername(String UserName);
    List<String> findByPassword(String Password);
    List<String> findByEmailId(String EmaiId);
    List<String> findByContact(String Contact);
    List<String> findByDob(String Dob);
    List<String> findByBillAdd(String BillAdd);
    List<String> findByShipAdd(String ShipAdd);
    List<String> findByLastLogin(String LastLogin);


}

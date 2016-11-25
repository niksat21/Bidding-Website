package edu.utdallas.cs6314.domain.repository;


import java.util.List;

import edu.utdallas.cs6314.domain.model.Bid;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BidRepository extends MongoRepository<Bid, String> {
    List<Bid> findBidsByUserId(String userId);

    List<Bid> findBidsByProductId(String productId);
}

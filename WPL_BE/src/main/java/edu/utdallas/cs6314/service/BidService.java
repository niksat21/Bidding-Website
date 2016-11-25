package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Bid;

public interface BidService {

    List<Bid> getAllBids();

    Bid getBid(String bidId);

    List<Bid> getBidsByUserId(String userId);

    List<Bid> getBidsByProductId(String productId);

    Bid placeBid(Bid bid);
}

package edu.utdallas.cs6314.dao;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Bid;
import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.domain.model.User;

public interface BidDAO {
    List<Bid> getAllBids();

    Bid getBid(String bidId);

    List<Bid> getBidsByUserId(String userId);

    List<Bid> getBidsByProductId(String productId);

    Bid placeBid(Bid bid);

}

package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Bid;

import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
public interface BidService {

    List<Bid> getAllBids();

    @Cacheable(value = "bids", key = "#bidId")
    Bid getBid(String bidId);

    List<Bid> getBidsByUserId(String userId);

    List<Bid> getBidsByProductId(String productId);

    @CachePut(value = "bids", key = "#bid.bidId")
    Bid placeBid(Bid bid);
}

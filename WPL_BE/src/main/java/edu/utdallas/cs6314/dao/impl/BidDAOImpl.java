package edu.utdallas.cs6314.dao.impl;

import java.util.List;

import edu.utdallas.cs6314.dao.BidDAO;
import edu.utdallas.cs6314.domain.model.Bid;
import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.domain.repository.BidRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BidDAOImpl implements BidDAO {
    @Autowired
    private BidRepository bidRepository;

    public List<Bid> getAllBids() {
        return bidRepository.findAll();
    }

    public Bid getBid(String bidId) {
        return bidRepository.findOne(bidId);
    }

    public List<Bid> getBidsByUserId(String userId) {
        return bidRepository.findBidsByUserId(userId);
    }

    public List<Bid> getBidsByProductId(String productId) {
        return bidRepository.findBidsByProductId(productId);
    }

    public Bid placeBid(Bid bid) {
        return bidRepository.save(bid);
    }
}

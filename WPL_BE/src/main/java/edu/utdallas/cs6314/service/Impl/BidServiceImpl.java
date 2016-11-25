package edu.utdallas.cs6314.service.Impl;

import java.util.List;

import edu.utdallas.cs6314.dao.BidDAO;
import edu.utdallas.cs6314.dao.UserDAO;
import edu.utdallas.cs6314.domain.model.Bid;
import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.service.BidService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BidServiceImpl implements BidService {
    @Autowired
    private BidDAO bidDAO;

    public List<Bid> getAllBids() {
        return bidDAO.getAllBids();
    }

    public Bid getBid(String bidId) {
        return bidDAO.getBid(bidId);
    }

    public List<Bid> getBidsByUserId(String userId) {
        // TODO Check if user exists.
        return bidDAO.getBidsByUserId(userId);
    }

    public List<Bid> getBidsByProductId(String productId) {
        // TODO Check if product exists.
        return bidDAO.getBidsByProductId(productId);
    }

    public Bid placeBid(Bid bid) {
        return bidDAO.placeBid(bid);
    }
}

package edu.utdallas.cs6314.service.Impl;

import java.util.List;

import edu.utdallas.cs6314.dao.OrderDAO;
import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderDAO orderDAO;

    public List<Order> getAllOrders() {
        return orderDAO.getAllOrders();
    }

    public Order getOrder(String orderId) {
        return orderDAO.getOrder(orderId);
    }

    public Order getOrderByProductId(String productId) {
        return orderDAO.getOrderByProductId(productId);
    }

    public Order getOrderByBidId(String bidId) {
        return orderDAO.getOrderByWinningBidId(bidId);
    }

    public List<Order> getOrdersByBuyerId(String buyerId) {
        return orderDAO.getOrdersByBuyerId(buyerId);
    }

    public List<Order> getOrdersBySellerId(String sellerId) {
        return orderDAO.getOrdersBySellerId(sellerId);
    }

    public Order placeOrder(Order order) {
        return orderDAO.placeOrder(order);
    }
}

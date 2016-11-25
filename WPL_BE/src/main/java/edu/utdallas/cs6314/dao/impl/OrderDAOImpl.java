package edu.utdallas.cs6314.dao.impl;

import java.util.List;

import edu.utdallas.cs6314.dao.OrderDAO;
import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.domain.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDAOImpl implements OrderDAO {
    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrder(String orderId) {
        return orderRepository.findOne(orderId);
    }

    public List<Order> getOrdersByBuyerId(String buyerId) {
        return orderRepository.findOrdersByBuyerId(buyerId);
    }

    public List<Order> getOrdersBySellerId(String sellerId) {
        return orderRepository.findOrdersBySellerId(sellerId);
    }

    public Order getOrderByWinningBidId(String winningBidId) {
        return orderRepository.findOrderByWinningBidId(winningBidId);
    }

    public Order getOrderByProductId(String productId) {
        return orderRepository.findOrderByProductId(productId);
    }

    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }
}

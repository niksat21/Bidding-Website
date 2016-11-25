package edu.utdallas.cs6314.dao;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;

public interface OrderDAO {
    List<Order> getAllOrders();

    Order getOrder(String orderId);

    List<Order> getOrdersByBuyerId(String buyerId);

    List<Order> getOrdersBySellerId(String sellerId);

    Order getOrderByWinningBidId(String winningBidId);

    Order getOrderByProductId(String productId);

    Order placeOrder(Order order);
}

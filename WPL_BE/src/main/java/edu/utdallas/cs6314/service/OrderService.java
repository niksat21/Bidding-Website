package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;

public interface OrderService {
    List<Order> getAllOrders();

    Order getOrder(String orderId);

    Order getOrderByProductId(String productId);

    Order getOrderByBidId(String bidId);

    List<Order> getOrdersByBuyerId(String buyerId);

    List<Order> getOrdersBySellerId(String sellerId);

    Order placeOrder(Order order);
}

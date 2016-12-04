package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;

import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
public interface OrderService {
    List<Order> getAllOrders();

    @Cacheable(value = "orders", key = "#orderId")
    Order getOrder(String orderId);

    Order getOrderByProductId(String productId);

    Order getOrderByBidId(String bidId);

    List<Order> getOrdersByBuyerId(String buyerId);

    List<Order> getOrdersBySellerId(String sellerId);

    @CachePut(value = "orders", key = "#order.orderId")
    Order placeOrder(Order order);
}

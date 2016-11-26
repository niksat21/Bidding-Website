package edu.utdallas.cs6314.rest.controller;

import java.util.List;

import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller used for order information.
 */
@CrossOrigin
@RestController
@Cacheable("orders")
@RequestMapping({"/api/orders"})
public class OrderController {

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/{orderId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> getOrder(@PathVariable String orderId) {
        Order order = orderService.getOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @RequestMapping(value = "/buyer/{buyerId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Order>> getOrdersForBuyer(@PathVariable String buyerId) {
        List<Order> orders = orderService.getOrdersByBuyerId(buyerId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


    @RequestMapping(value = "/seller/{sellerId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Order>> getOrdersForSeller(@PathVariable String sellerId) {
        List<Order> orders = orderService.getOrdersBySellerId(sellerId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @RequestMapping(value = "/product/{productId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> getOrderByProduct(@PathVariable String productId) {
        Order order = orderService.getOrderByProductId(productId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @RequestMapping(value = "/bid/{bidId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> getOrderByBid(@PathVariable String bidId) {
        Order order = orderService.getOrderByBidId(bidId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @CachePut
    @RequestMapping(value = "", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
        return new ResponseEntity<>(orderService.placeOrder(order), HttpStatus.OK);
    }
}

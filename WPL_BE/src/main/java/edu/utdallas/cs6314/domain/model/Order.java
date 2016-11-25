package edu.utdallas.cs6314.domain.model;

import java.util.GregorianCalendar;

import org.springframework.data.annotation.Id;

public class Order {
    @Id
    String orderId;
    int quantity;
    String buyerId;
    String sellerId;
    String winningBidId;
    GregorianCalendar orderDate;

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(String buyerId) {
        this.buyerId = buyerId;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public String getWinningBidId() {
        return winningBidId;
    }

    public void setWinningBidId(String winningBidId) {
        this.winningBidId = winningBidId;
    }

    public GregorianCalendar getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(GregorianCalendar orderDate) {
        this.orderDate = orderDate;
    }
}

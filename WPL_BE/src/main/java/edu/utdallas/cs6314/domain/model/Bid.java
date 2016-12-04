package edu.utdallas.cs6314.domain.model;

import java.util.GregorianCalendar;

import org.springframework.data.annotation.Id;

public class Bid implements java.io.Serializable {
    @Id
    String bidId;
    String productId;
    String userId;
    GregorianCalendar bidDate;

    public String getBidId() {
        return bidId;
    }

    public void setBidId(String bidId) {
        this.bidId = bidId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public GregorianCalendar getBidDate() {
        return bidDate;
    }

    public void setBidDate(GregorianCalendar bidDate) {
        this.bidDate = bidDate;
    }
}

package edu.utdallas.cs6314.domain.model;

/**
 * Created by niksat21 on 11/21/2016.
 */
public class Product {

    private String productId;
    private String productName;
    private String productCategory;
    private Long price;
    private String specifications;

    public String getProductID() {
        return productId;
    }

    public void setProductID(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductname(String productName) {
        this.productName = productName;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }
}

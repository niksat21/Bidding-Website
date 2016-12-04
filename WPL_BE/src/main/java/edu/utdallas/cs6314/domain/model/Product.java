package edu.utdallas.cs6314.domain.model;

import java.util.Objects;

import org.springframework.data.annotation.Id;

/**
 * Created by niksat21 on 11/21/2016.
 */
public class Product implements java.io.Serializable {
    @Id
    private String productId;
    private String sellerId;
    private String productName;
    private String productCategory;
    private Long price;
    private String specifications;
    private String productLocation;

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public void setProductName(String productName) {
        this.productName = productName;
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

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }

        if (!(o instanceof Product)) {
            return false;
        }

        Product product = (Product) o;

        return Objects.equals(productId, product.productId)
                && Objects.equals(sellerId, product.sellerId)
                && Objects.equals(productName, product.productName)
                && Objects.equals(productCategory, product.productCategory)
                && price == product.price && Objects.equals(specifications, product.specifications)
                && Objects.equals(specifications, product.specifications)

        ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, sellerId, productName, productCategory, price,
                specifications, productLocation);
    }


}

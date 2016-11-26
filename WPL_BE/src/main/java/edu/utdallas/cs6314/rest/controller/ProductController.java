package edu.utdallas.cs6314.rest.controller;

import java.util.List;

import javax.validation.Valid;

import edu.utdallas.cs6314.domain.model.Product;
import edu.utdallas.cs6314.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@Cacheable("products")
@RequestMapping({"/api/products"})
public class ProductController {
    @Autowired
    ProductService productService;

    @RequestMapping(value = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @RequestMapping(value = "/{productId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> getProduct(@PathVariable String productId) {
        Product product = productService.getProduct(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProductsForUser(@PathVariable String userId) {
        List<Product> products = productService.getAllProductsBySellerId(userId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @CachePut
    @RequestMapping(value = "", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> postNewProduct(@RequestBody @Valid Product product) {
        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.OK);
    }
}
